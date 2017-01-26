import React from 'react';
import styles from './style.css';

const MetaContainer = (props) => {
  return <div style={props.style} className={styles.container}>{props.children}</div>;
};

MetaContainer.defaultProps = {
  style: {
    border: 'none'
  }
};

export default MetaContainer;
