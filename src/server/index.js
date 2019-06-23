import mongoose from 'mongoose';
import { graphqlMiddleware } from '../middlewares/graphql';
import express from 'express';
import proxy from 'http-proxy-middleware';
import path from 'path';

const DB_PATH = 'mongodb://mongodb/express';
import { renderForClient } from './renderForClient';

const DIST_DIR = path.join(__dirname, '../../public');

let connector;

let connectDB = () => {
  clearTimeout(connector);

  mongoose.connect(DB_PATH, {
    useNewUrlParser: true,
    user: process.env.MONGO_INITDB_USERNAME,
    pass: process.env.MONGO_INITDB_PASSWORD,
    reconnectTries: 3,
    reconnectInterval: 10000,
  }, (error) => {
    if (error) {
      console.log('error', error);
      connector = setTimeout(connectDB, 10000);
    }
  });
};

connectDB();

let db = mongoose.connection;

db.on('connected', function() {
  console.log('MongoDB connected!');
});

db.once('open', function() {
  console.log('MongoDB connection opened!');
});
db.on('reconnected', function () {
  console.log('MongoDB reconnected!');
});
db.on('disconnected', function() {
  console.log('MongoDB disconnected!');
});

let graphQLServer = express();
graphQLServer.use('/graphql', graphqlMiddleware);
graphQLServer.listen(3000);
console.log('Running a GraphQL API server at localhost:3000/graphql');

let app = express();

app.use(express.static(DIST_DIR));

app.get('/', renderForClient);
app.use('/graphql', proxy({target: 'http://localhost:3000', changeOrigin: true}));

app.listen(8080);
