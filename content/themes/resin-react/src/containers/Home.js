import React, { Component } from 'react';
import { markdown } from '../utils';
import Summary from 'components/Summary';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      meta: {},
      tags: []
    }
  }

  createMarkup() {
    return {__html: 'First &middot; Second'};
  }

  componentDidMount() {
    fetch(ghost.url.api('posts', {limit: 3, include: 'tags, author'}))
    .then(response => response.json())
    .then((data) => {
      this.setState({
        posts: data.posts,
        meta: data.meta
      })
    })
  }

  renderPosts(posts) {
    return posts.map((post, i) => {
      return <Summary key={i} post={post} />
    })
  }
  render() {
    return (
      <div>
        <h1>{this.renderPosts(this.state.posts)}</h1>
      </div>
    )
  }
}

export default Home;
