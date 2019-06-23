import { QueryRenderer, graphql } from 'react-relay';

import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';

import ReactTestRenderer from 'react-test-renderer';
import React from 'react';
import Home from './Home';
import { greetingTemplate }  from './constants';

test('Fragment Container', () => {
  const environment = createMockEnvironment();
  const TestRenderer = () => (
      <QueryRenderer
          environment={environment}
          query={graphql`
          query userQuery @relay_test_operation {
            user {
                name
                label
                description
            }
        }
      `}
          variables={{}}
          render={({error, props}) => {
            if (props) {
              return <Home user={props.user} />;
            } else if (error) {
              return error.message;
            }
            return 'Loading...';
          }}
      />
  );

  const renderer = ReactTestRenderer.create(<TestRenderer />);
  let mockPayload = {};

  environment.mock.resolveMostRecentOperation(operation => {
    mockPayload = MockPayloadGenerator.generate(operation);
    return mockPayload;
  });

  expect(
      renderer.root.findByProps({className: "content"}).children
  ).toContain(greetingTemplate(mockPayload.data.user));
});
