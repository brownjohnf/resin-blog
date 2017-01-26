import React, { Component } from 'react';
import styles from './style.css';

const MetaContainer = (props = {
  style: { border:none }
}) => {
  return <div style={props.style} className={styles.container}>{props.children}</div>;
}

export default MetaContainer
