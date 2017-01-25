import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import List from 'containers/List';
import Single from 'containers/Single';
import Footer from 'components/Footer';
import { URL, BLOG_TITLE } from './settings';

const routeHandler = () => {
  if (window.ga != undefined) {
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }
  if (window._gs != undefined) {
    // https://www.gosquared.com/docs/api/javascript-tracking-code/track-pageviews
    _gs('track');
    _gs('track', window.location.pathname, document.title);
  }
}

const App = (props) => {
  return(
    <div>
      <Link to={`/`}>Home</Link>
      {props.children}
      <Footer title={BLOG_TITLE} url={URL} copyright='2013-2016'/>
    </div>
  );
}

render((
  <Router history={browserHistory} onUpdate={routeHandler}>
    <Route path="/" component={App}>
      <IndexRoute component={List}/>
      <Route path="page/:pageNumber" component={List}/>
      <Route path="tag/:tagName" component={List}/>
      <Route path="tag/:tagName/page/:pageNumber" component={List}/>
      <Route path=":postSlug" component={Single}/>
    </Route>
  </Router>
), document.getElementById('root'));
