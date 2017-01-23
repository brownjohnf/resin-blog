import React, { Component } from 'react';
import { markdown } from '../utils';
import Summary from 'components/Summary';
import Pagination from 'components/Pagination';
import { browserHistory } from 'react-router';
import { POST_PER_PAGE } from '../settings';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      meta: {
        pagination: {
          page: null,
          pages: null
        }
      },
      tags: []
    }
  }

  fetchPosts(filter) {
    fetch(ghost.url.api('posts', filter))
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

  getCurrentPage(path) {
    return path.split('/')[2] || 1
  }

  componentDidMount() {
    this.fetchPosts({ page: this.getCurrentPage(this.props.location.pathname), limit: POST_PER_PAGE, include: 'tags, author'})
  }

  componentWillReceiveProps(nextProps) {
    this.fetchPosts({ page: this.getCurrentPage(nextProps.location.pathname), limit: POST_PER_PAGE, include: 'tags, author'})
  }

  render() {
    return (
      <div>
        {this.renderPosts(this.state.posts)}
        <Pagination
          page={this.state.meta.pagination.page}
          pages={this.state.meta.pagination.pages}
          path="/page/"
          next={ this.state.meta.pagination.next }
          prev={ this.state.meta.pagination.prev }
          />
      </div>
    )
  }
}

export default Home;
