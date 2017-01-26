import React from 'react';
import styles from './style.css';
import Identicon from 'identicon.js';

const GenerateIcon = (id, size) => {
  // key can be any unique id
  return new Identicon(id, size).toString();
};

const getImage = (image, id, size) => {
  if (!image) {
    return `data:image/png;base64,${GenerateIcon(id, size)}`;
  }
  return image;
};

const User = (props) => {
  return (
    <div className={styles.user}>
      <span className={styles.imageContainer}>
        <img
        className={styles.image}
        src={getImage(props.image, props.id, props.size)}
        alt={props.name} />
      </span>
      <span className={styles.textContainer}>
        <p className={styles.name}>{props.name}</p>
        <p>{props.bio}</p>
      </span>
    </div>
  );
};

User.defaultProps = {
  size: 420
};

export default User;
