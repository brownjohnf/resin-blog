import React, { Component } from 'react';
import { markdown } from '../utils';

class Summary extends Component {
  render() {
    const post = this.props.post
    return (
      <div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{__html: markdown(post.markdown)}} />;
      </div>
    )
  }
}

export default Summary;
