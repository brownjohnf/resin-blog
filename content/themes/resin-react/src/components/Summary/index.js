import React, { Component } from 'react';
import Meta from 'components/Meta';
import Title from 'components/Title';
import styles from './style.css';

class Summary extends Component {
  render() {
    const { url, tags, date, excerpt, disqusShortName, title } = this.props;
    return (
      <article className={styles.container}>
        <Meta
          tags={tags}
          date={date}
          url={url}
          disqusShortName={disqusShortName} />
        <Title url={url} title={title}/>
        <p className={styles.excerpt}>{excerpt}</p>
      </article>
    )
  }
}

export default Summary;
