import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.css';

const Pagination = (props) => {
  return (
    <nav className={styles.container} role="navigation">
      <Link
        className={styles.newerPosts}
        style={props.prev ? null : {pointerEvents: "none"}}
        to={props.path + props.prev}>
        &larr; Newer Posts
      </Link>
      <span className={styles.pageNumber}>{props.page} of {props.pages}</span>
      <Link
        className={styles.olderPosts}
        style={props.next ? null : {pointerEvents: "none"}}
        to={props.path + props.next}>
        Older Posts &rarr;
      </Link>
    </nav>
  )
}

export default Pagination;
