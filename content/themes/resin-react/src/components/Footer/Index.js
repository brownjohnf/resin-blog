import React, { Component } from 'react';
import styles from './style.css';

const Footer = (props) => {
  return (
    <footer className={styles.container}>
        <a className={`${styles.subscribe} icon-feed`} href={`${props.url}/rss/`}><span className={styles.tooltip}>Subscribe!</span></a>
        <div className={styles.inner}>
          <section className={styles.copyright}>
            All content copyright <a href="/">{props.title}</a> &copy; {props.copyright} &bull; All rights reserved.
          </section>
          <section className={styles.poweredby}>
            Proudly published with <a className="icon-ghost" href="http://ghost.org">Ghost</a>
          </section>
        </div>
    </footer>
  )
}

export default Footer;
