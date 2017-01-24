import React, { Component } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { URL, DISQUS_SHORTNAME } from '../settings';
import { getExcerpt } from '../utils';
import Helmet from "react-helmet";

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: null,
        markdown: ''
      }
    }
  }

  fetchPost(slug) {
    fetch(
      ghost.url.api('posts', 'slug', slug, { include: 'tags, author'} )
    )
    .then(response => response.json())
    .then((data) => {
      this.setState({
        post: data.posts[0]
      })
    })
  }

  componentDidMount() {
    this.fetchPost(this.props.params.postSlug)
  }

  componentWillReceiveProps(nextProps) {
    this.fetchPost(nextProps.params.postSlug)
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <Helmet
          title={post.title}
          meta={[
            {name: "description", content: getExcerpt(post.html)},
            {property: "og:type", content: "article"},
            {property: "og:url", content: URL + this.props.location.pathname},
            {property: "og:image", content: post.image },
            {property: "og:image", content: post.image }
          ]}
        />
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{__html: post.html }}></p>
        <ReactDisqusComments
          shortname={DISQUS_SHORTNAME}
          title={post.title}
          url={URL + post.url}
          identifier={URL + post.url}
          onNewComment={this.handleNewComment}
        />
      </div>
    )
  }
}

export default Post;
