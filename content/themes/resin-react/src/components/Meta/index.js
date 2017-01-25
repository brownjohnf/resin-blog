import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import _ from 'lodash';
import ReactDisqusCounter from 'react-disqus-counter';
import styles from './style.css';

class Meta extends Component {
  renderTags(tags) {
    if (!_.isEmpty(tags)) {
      return tags.map((tag, i) => {
        return (
          <span>
            {i===0 ? ' on ' : ''}
            {!!i && ", "}
            <Link key={tag.slug} to={`/tag/${tag.slug}`}>{tag.name}</Link>
          </span>
        )
      })
    }
  }

  render() {
    const { date, tags, url, disqusShortName } = this.props;
    return (
      <div className={styles.container}>
      {moment(date).format('DD MMM YYYY')}
      {this.renderTags(tags)}
      <Link to={`${url}#disqus_thread`}>
        <ReactDisqusCounter
          url={url}
          shortname={disqusShortName}
        />
      </Link>
      </div>
    )
  }
}

export default Meta;
