import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import _ from 'lodash';
import ReactDisqusCounter from 'react-disqus-counter';
import { URL, DISQUS_SHORTNAME } from 'settings';

class Meta extends Component {
  renderTags(tags) {
    return tags.map((tag) => {
      return <Link key={tag.slug} to={`/tag/${tag.slug}`}>{tag.name}</Link>
    })
  }

  render() {
    const { date, tags, url, disqusShortName } = this.props;
    return (
      <div>
      {moment(date).calendar()}
      {!_.isEmpty(tags) ? this.renderTags(tags) : null}
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
