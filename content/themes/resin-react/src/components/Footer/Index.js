import React, { Component } from 'react';
import styles from './style.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.container}>
          <a className={`${styles.subscribe} icon-feed`} href={`${this.props.url}/rss/`}><span className={styles.tooltip}>Subscribe!</span></a>
          <div className={styles.inner}>
            <section className={styles.copyright}>
              All content copyright <a href="/">{this.props.title}</a> &copy; {this.props.copyright} &bull; All rights reserved.
            </section>
            <section className={styles.poweredby}>
              Proudly published with <a className="icon-ghost" href="http://ghost.org">Ghost</a>
            </section>
          </div>
      </footer>
    )
  }
}

export default Footer;
