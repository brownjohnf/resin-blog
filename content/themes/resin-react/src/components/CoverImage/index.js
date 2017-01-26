import React from 'react';
import styles from './style.css';

const CoverImage = (props) => {
  return (
    <div
      className={styles.container}
      style={
      {
        backgroundImage: `url(${props.image})`,
        height: props.height,
        marginBottom: props.mb
      }
      }>
      {props.children}
    </div>
  );
};

CoverImage.defaultProps = {
  height: '100vh',
  mb: '0'
};

const Vertical = (props) => {
  return (
    <div className={styles.vertical}>
      {props.children}
    </div>
  );
};

export { CoverImage, Vertical };
