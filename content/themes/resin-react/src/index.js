import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from 'containers/Home';
import Post from 'containers/Post';
import Tag from 'containers/Tag';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <Link to={`/`}>Home</Link>
        <Link to={`/random-post`}>ballbags</Link>
        <Link to={`/tag/my-name`}>tags</Link>
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="page/:pageName" component={Home}/>
      <Route path="tag/:tagName" component={Tag}/>
      <Route path=":postName" component={Post}/>
    </Route>
  </Router>
), document.getElementById('content'));
