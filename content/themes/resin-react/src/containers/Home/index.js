import React, { Component } from 'react';
import Helmet from "react-helmet";
import _ from 'lodash';
import { getExcerpt } from '../../utils'

import Summary from 'components/Summary';
import Pagination from 'components/Pagination';
import Loading from 'components/Loading';

import { POST_PER_PAGE, BLOG_TITLE, BLOG_DESCRIPTION, URL, DISQUS_SHORTNAME } from 'settings';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    };
  }

  fetchPosts(query) {
    this.setState({ loading: true })
    fetch(ghost.url.api('posts', query))
    .then(response => response.json())
    .then((data) => {
      this.setState({
        posts: data.posts,
        meta: data.meta,
        loading: false
      })
    })
  }

  buildApiQuery(props) {
    const { pageNumber, tagName } = props.params
    const filter = tagName ? `tags:${tagName}`: null;
    return {
      page: pageNumber,
      limit: POST_PER_PAGE,
      include: 'tags, author',
      filter: filter
    }
  }

  getRoutePath(props) {
    // gets the correct link path to pass to pagination
    const { pageNumber, tagName } = props.params
    const tagPath = tagName ? `/tag/${tagName}` : ''
    return `${tagPath}/page/`
  }

  renderPosts(posts) {
    return posts.map((post, i) => {
      return <Summary
                key={i}
                title={post.title}
                url={post.url}
                date={post.date}
                tags={post.tags}
                excerpt={getExcerpt(post.html)}
                disqusShortName={DISQUS_SHORTNAME} />
    })
  }

  renderPagination(pagination) {
    return (<Pagination
      page={pagination.page}
      pages={pagination.pages}
      path={this.getRoutePath(this.props)}
      next={ pagination.next }
      prev={ pagination.prev }
      />
    )
  }

  componentDidMount() {
    this.fetchPosts(this.buildApiQuery(this.props))
  }

  componentWillReceiveProps(nextProps) {
    this.fetchPosts(this.buildApiQuery(nextProps))
  }

  render() {
    return (
      <div>
        <Helmet
          title={BLOG_TITLE}
          meta={[
            {name: "description", content: BLOG_DESCRIPTION},
            {property: "og:type", content: "website"},
            {property: "og:url", content: URL + this.props.location.pathname},
            {property: "og:image", content: 'http://resin.io/blog/content/images/2015/Jan/Header_Image_Ghost.png'},
            {property: "twitter:title", content: BLOG_TITLE},
            {property: "twitter:url", content: URL},
            {property: "twitter:image", content: 'http://resin.io/blog/content/images/2015/Jan/Header_Image_Ghost.png'}
          ]}
        />
        {this.state.loading ? <Loading /> : this.renderPosts(this.state.posts)}
        {this.state.loading ? <Loading /> : this.renderPagination(this.state.meta.pagination)}
      </div>
    )
  }
}

export default Home;
