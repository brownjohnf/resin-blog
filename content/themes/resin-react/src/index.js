import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Post from 'containers/Post';
import Tag from 'containers/Tag';
import Error from 'containers/Error';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = window.__STATE_FROM_SERVER__
  }

  render () {
    return(
      <div>
        <Link to={`/`}>Home</Link>
        <Link to={`/random-post`}>Post</Link>
        <Link to={`/tag/my-name`}>tags</Link>
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="tag/:tagName" component={Tag}/>
      <Route path=":postName" component={Post}/>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
), document.getElementById('content'));
