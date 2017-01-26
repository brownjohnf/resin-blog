import React from 'react';
import styles from './style.css';

const Logo = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image} />
    </div>
  );
};

export default Logo;
