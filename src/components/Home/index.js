import React from 'react';
import { QueryRenderer } from 'react-relay';
import LoadingIndicator from '../LoadingIndicator';
import HomContainer from './Home';
import userQuery from './user';
import { errorTemplate } from './constants';

export default class extends React.Component {
  render() {
    const { environment } = this.props;

    return (
        <QueryRenderer
            environment={environment}
            query={userQuery}
            render={({ error, props }) => {
              if (error) {
                return <div>{`${errorTemplate(error.message)}`}</div>;
              }
              if (!props) {
                return <LoadingIndicator />;
              }

              return <HomContainer user={props.user} />;
            }}
        />
    );
  }
}

export const HomeFragment = HomContainer;
export const query = userQuery;
