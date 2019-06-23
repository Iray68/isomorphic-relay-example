import  React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import styles from './styles.css';
import { greetingTemplate } from './constants';

const Home = (props) => {
  return (
      <div className={styles.base}>
        <div className={styles.content}>{greetingTemplate(props.user)}</div>
      </div>
  );
};

export default createFragmentContainer(Home, {
  user: graphql`
      fragment Home_user on User {
         name
         label
         description
      }
  `
});