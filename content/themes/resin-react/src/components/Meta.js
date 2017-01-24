import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import _ from 'lodash';
import ReactDisqusCounter from 'react-disqus-counter';
import { URL, DISQUS_SHORTNAME } from '../settings';

class Meta extends Component {
  renderTags(tags) {
    return tags.map((tag) => {
      return <Link key={tag.slug} to={`/tag/${tag.slug}`}>{tag.name}</Link>
    })
  }

  render() {
    return (
      <div>
      {moment(this.props.date).calendar()}
      {!_.isEmpty(this.props.tags) ? this.renderTags(this.props.tags) : null}
      <Link to={`${this.props.url}#disqus_thread`}>
        <ReactDisqusCounter
          url={URL + this.props.url}
          shortname={DISQUS_SHORTNAME}
        />
      </Link>
      </div>
    )
  }
}

export default Meta;
