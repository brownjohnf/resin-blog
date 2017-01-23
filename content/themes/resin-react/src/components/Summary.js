import React, { Component } from 'react';
import { markdown, getExcerpt } from '../utils';

class Summary extends Component {
  render() {
    const post = this.props.post
    return (
      <div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{__html: getExcerpt(markdown(post.markdown)) }}></p>;
      </div>
    )
  }
}

export default Summary;
