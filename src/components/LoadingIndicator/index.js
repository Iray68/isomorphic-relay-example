import React from 'react';
import styles from './style.css';

const Dot = () => <div style={{ backgroundColor: 'black' }}/>;

export default () => (
    <div className={styles['lds-ellipsis']}>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </div>
);