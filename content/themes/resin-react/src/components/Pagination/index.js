import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.css';

class Pagination extends Component {
  render() {
    return (
      <nav className={styles.container} role="navigation">
        <Link
          className={styles.newerPosts}
          style={this.props.prev ? null : {pointerEvents: "none"}}
          to={this.props.path + this.props.prev}>
          &larr; Newer Posts
        </Link>
        <span className={styles.pageNumber}>{this.props.page} of {this.props.pages}</span>
        <Link
          className={styles.olderPosts}
          style={this.props.next ? null : {pointerEvents: "none"}}
          to={this.props.path + this.props.next}>
          Older Posts &rarr;
        </Link>
      </nav>
    )
  }
}

export default Pagination;
