import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from 'containers/Home';
import Post from 'containers/Post';

browserHistory.listen(location => {
  console.log(location.pathname);
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <Link to={`/`}>Home</Link>
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="page/:pageNumber" component={Home}/>
      <Route path="tag/:tagName" component={Home}/>
      <Route path="tag/:tagName/page/:pageNumber" component={Home}/>
      <Route path=":postSlug" component={Post}/>
    </Route>
  </Router>
), document.getElementById('content'));
