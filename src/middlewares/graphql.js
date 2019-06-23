import { buildSchema, printSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';

import User from '../models/user';
import Project from '../models/project';

import React from 'react';
import { renderToString } from 'react-dom/server';

let schema = buildSchema(`
  type Attachment {
    label: String, uri: String
  }

  type Project {
    _id: String,
    name: String,
    summary: String,
    attachments: [ Attachment ],
    members:[ String ],
  }
  
  type Experience {
    company: String,
    position: String,
    highlights: [String],
    startDate: String, 
    website: String
  }
  
  type Profile {
     network: String,
     username: String,
     url: String
  }
  
  type Skill {
    name: String,
    level: String,
    keywords: [ String ]
  }

  type User {
    name: String,
    label: String,
    description: String,
    summary: String,
    website: String,
    experiences: [ Experience ],
    skills: [ Skill ],
    projects: [ Project ],
    profiles: [ Profile ]
  }
  
  type Query {
    user(name: String): User
    project(id: ID!): Project
  }
`);

let root = {
  user: async ({ name }) => {
    if (!name) {
      return await User.findOne({
        name: new RegExp(process.env.MONGO_INITDB_USERNAME, 'i')
      }).populate('projects');
    }

    return await User.findOne({ name: new RegExp(name, 'i') })
      .populate('projects');
  },

  project: async ({ id }) => {
    return await Project.findOne({_id: id});
  }
};

export const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});