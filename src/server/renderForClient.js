import path from 'path';
import fs from 'fs';
import environment from '../relay/environment';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ReactRelayContext, fetchQuery } from 'react-relay';
import { HomeFragment, query } from '../components/Home';

const DIST_DIR = path.join(__dirname);
const HTML_FILE = path.resolve(DIST_DIR, '../../public/template.html');

const variables = {};

const injectApp = (data, body) => {
  return data.replace(
      '<div id="app"></div>',
      `<div id="app">${body}</div>`
  );
};

export const renderForClient = async (req, res) => {
  const data = await fetchQuery(environment, query, variables);

  const rendered = renderToNodeStream(
      <ReactRelayContext.Provider value={{environment, variables}}>
        <HomeFragment {...data} />
      </ReactRelayContext.Provider>
  );

  fs.readFile(HTML_FILE, 'utf8', (err, data) => {
    if (err) {
      console.log(`read html Error: ${err}`);
      return res.status(404).end();
    }

    const html = injectApp(data, rendered);
    res.send(html);
  });

};