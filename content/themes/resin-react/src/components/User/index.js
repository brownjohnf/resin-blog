import React, { Component } from 'react';
import styles from './style.css';

const User = () => {
  return (
    <span className={styles.user}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={this.props.image}
          alt={this.props.name} />
      </div>
      {this.props.name}
    </span>
  )
}

export default User;
