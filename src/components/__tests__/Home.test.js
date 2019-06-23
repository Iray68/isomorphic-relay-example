import React from 'react';
import Home, { HomeFragment } from '../Home';
import LoadingIndicator from '../LoadingIndicator';
import { errorTemplate } from '../Home/constants';

import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';

import ReactTestRenderer from 'react-test-renderer';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('Loading State', () => {
  const environment = createMockEnvironment();
  const wrapper = mount(
      <Home environment={environment} />
  );

  expect(wrapper.find(LoadingIndicator)).toHaveLength(1);
  expect(wrapper.find(HomeFragment)).toHaveLength(0);
});

test('Data Render', () => {
  const environment = createMockEnvironment();
  const renderer = ReactTestRenderer.create(
      <Home environment={environment} />,
  );

  environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation),
  );

  expect(
      renderer.root.findByProps({className: "base"})
  ).toBeDefined();
});

test('Error State', () => {
  const environment = createMockEnvironment();
  const renderer = ReactTestRenderer.create(
      <Home environment={environment} />,
  );

  const mockEorror = expect.any(String);
  const outputError = errorTemplate(mockEorror);

  environment.mock.rejectMostRecentOperation(new Error(mockEorror));

  expect(
      renderer.root.find(item => (item.children.includes(outputError))),
  ).toBeDefined();
});