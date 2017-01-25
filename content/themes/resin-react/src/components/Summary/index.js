import React, { Component } from 'react';
import { Link } from 'react-router';
import Meta from 'components/Meta';

class Summary extends Component {
  render() {
    const { url, tags, date, excerpt, disqusShortName, title } = this.props;
    return (
      <div>
        <Link to={url}>
          <h1>{title}</h1>
        </Link>
        <Meta
          tags={tags}
          date={date}
          url={url}
          disqusShortName={disqusShortName} />
        <p>{excerpt}</p>
      </div>
    )
  }
}

export default Summary;
