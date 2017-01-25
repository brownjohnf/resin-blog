import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.css';

const renderLink = (title, url) => {
  if (url) {
    return <Link to={url}>{title}</Link>
  }
  return title
}

const Title = (props) => {
  const { title, url } = props
  return (
    <h1 className={styles.title}>
      { renderLink(title, url) }
    </h1>
  )
}

export default Title;
