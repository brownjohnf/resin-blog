import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.css';

class Title extends Component {

  renderLink(title, url) {
    if (url) {
      return <Link to={url}>{title}</Link>
    }
    return title
  }

  render() {
    const { title, url } = this.props
    return (
      <h1 className={styles.title}>
        { this.renderLink(title, url) }
      </h1>
    )
  }
}

export default Title;
