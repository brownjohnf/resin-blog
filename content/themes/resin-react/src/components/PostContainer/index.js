import React from 'react';
import styles from './style.css';

const PostContainer = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default PostContainer;
