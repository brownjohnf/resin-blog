import React, { Component } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { URL, DISQUS_SHORTNAME } from 'settings';
import { getExcerpt } from '../../utils';
import Helmet from "react-helmet";
import ReactMarkdown from 'react-markdown';
import Loading from 'components/Loading';
import Share from 'components/Share';
import styles from './style.css';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: null
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
    if (post) {
      return(
        <div className={styles.container}>
          <Helmet
            title={post.title}
            meta={[
              {name: "description", content: getExcerpt(post.html)},
              {property: "og:type", content: "article"},
              {property: "og:url", content: URL + this.props.location.pathname},
              {property: "og:image", content: post.image},
              {property: "twitter:title", content: post.title},
              {property: "twitter:url", content: URL + this.props.location.pathname},
              {property: "twitter:image", content: post.image}
            ]}
          />
          <h1 className={styles.title}>{post.title}</h1>
          <ReactMarkdown source={post.markdown} />
          <Share url={URL + post.url}/>
          <ReactDisqusComments
            shortname={DISQUS_SHORTNAME}
            title={post.title}
            url={URL + post.url}
            identifier={URL + post.url}
            onNewComment={this.handleNewComment}
          />
        </div>
      );
    } else {
      return (<Loading />);
    }
  }
}

export default Post;
