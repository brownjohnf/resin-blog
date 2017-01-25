import React, { Component } from 'react';
import styles from './style.css';

const User = (props) => {
  return (
    <span className={styles.user}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={props.image}
          alt={props.name} />
      </div>
      {props.name}
    </span>
  )
}

export default User;
