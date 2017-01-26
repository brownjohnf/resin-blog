import React from 'react';
import { Link } from 'react-router';
import styles from './style.css';

const NotFound = (props) => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      <Link to={props.url}>Take me home</Link>
      <img src={props.image}/>
    </div>
  );
};

NotFound.defaultProps = {
  title: 'Oops something went wrong',
  message: 'We couldn\'t find what you were looking for',
  url: '/'
};

export default NotFound;
