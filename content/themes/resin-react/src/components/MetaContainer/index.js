import React, { Component } from 'react';
import styles from './style.css';

const MetaContainer = (props) => {
  return <div className={styles.container}>{props.children}</div>;
}

export default MetaContainer
