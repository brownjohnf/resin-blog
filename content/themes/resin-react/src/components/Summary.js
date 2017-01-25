import React, { Component } from 'react';
import { getExcerpt } from '../utils';
import { Link } from 'react-router';
import Meta from 'components/Meta';

class Summary extends Component {
  render() {
    const { post, disqusShortName } = this.props;
    return (
      <div>
        <Link to={post.url}>
          <h1>{post.title}</h1>
        </Link>
        <Meta
          tags={post.tags}
          date={post.date}
          url={post.url}
          disqusShortName={disqusShortName} />
        <p dangerouslySetInnerHTML={{__html: getExcerpt(post.html) }}></p>
      </div>
    )
  }
}

export default Summary;
