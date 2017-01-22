import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from 'containers/Home';
import Post from 'containers/Post';
import Tag from 'containers/Tag';

if (module.hot) {
  module.hot.accept();
}

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
      <Route path="tag/:tagName" component={Tag}/>
      <Route path=":postName" component={Post}/>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
), document.getElementById('content'));
