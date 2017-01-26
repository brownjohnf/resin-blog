import React, { Component } from 'react';
import { URL, DISQUS_SHORTNAME } from 'settings';
import excerpts from 'excerpts';

// resin.io components
import Pagination from 'components/Pagination';
import Loading from 'components/Loading';
import PostContainer from 'components/PostContainer';
import MetaContainer from 'components/MetaContainer';
import Tags from 'components/Tags';
import Excerpt from 'components/Excerpt';
import DateTime from 'components/DateTime';
import Title from 'components/Title';
import Share from 'components/Share';
import User from 'components/User';

import Helmet from "react-helmet";
import ReactMarkdown from 'react-markdown';
import ReactDisqusComments from 'react-disqus-comments';
import ReactDisqusCounter from 'react-disqus-counter';
import { Link } from 'react-router';

class Single extends Component {

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
        <PostContainer>
          <Helmet
            title={post.title}
            meta={[
              {name: "description", content: excerpts(post.html)},
              {property: "og:type", content: "article"},
              {property: "og:url", content: URL + this.props.location.pathname},
              {property: "og:image", content: post.image},
              {property: "twitter:title", content: post.title},
              {property: "twitter:url", content: URL + this.props.location.pathname},
              {property: "twitter:image", content: post.image}
            ]}
          />
          <MetaContainer>
            <DateTime date={post.published_at} />
            <Tags tags={post.tags} />
            <Link to='#disqus_thread'>
              <ReactDisqusCounter
                url={post.url}
                shortname={DISQUS_SHORTNAME}
              />
            </Link>

          </MetaContainer>
          <Title title={post.title}/>
          <MetaContainer style={{borderTop: '1px solid #e8ecf2', borderBottom: '1px solid #e8ecf2', padding: '10px 0' }}>
            <User
              name={post.author.name}
              image={post.author.image}
              id={post.author.uuid}
              bio={post.author.bio}/>
          </MetaContainer>
          <ReactMarkdown source={post.markdown} />
          <MetaContainer style={{borderTop: '1px solid #e8ecf2', borderBottom: '1px solid #e8ecf2', padding: '10px 0' }}>
            <Share/>
            <ReactDisqusComments
              shortname={DISQUS_SHORTNAME}
              title={post.title}
              url={URL + post.url}
              identifier={URL + post.url}
              onNewComment={this.handleNewComment}
            />
          </MetaContainer>
        </PostContainer>
      );
    } else {
      return (<Loading />);
    }
  }
}

export default Single;
