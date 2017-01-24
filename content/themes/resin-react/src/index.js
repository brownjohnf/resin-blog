import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from 'containers/Home';
import Post from 'containers/Post';

const routeHandler = () => {
  if (ga != undefined) {
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }
  if (_gs != undefined) {
    // https://www.gosquared.com/docs/api/javascript-tracking-code/track-pageviews
    _gs('track');
    _gs('track', window.location.pathname, document.title);
  }
}

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
  <Router history={browserHistory} onUpdate={routeHandler}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="page/:pageNumber" component={Home}/>
      <Route path="tag/:tagName" component={Home}/>
      <Route path="tag/:tagName/page/:pageNumber" component={Home}/>
      <Route path=":postSlug" component={Post}/>
    </Route>
  </Router>
), document.getElementById('content'));
