import React from 'react';
import styles from './style.css';

const CoverImage = (props) => {
  return (
    <div
      className={styles.container}
      style={
        {
          backgroundImage: `url(${props.image})`,
          height: props.height || '100vh',
          marginBottom: props.mb || '0'
        }
      }>
      {props.children}
    </div>
  )
}

const Vertical = (props) => {
  return (
    <div className={styles.vertical}>
      {props.children}
    </div>
  )
}

export { CoverImage, Vertical };
