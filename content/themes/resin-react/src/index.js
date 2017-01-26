import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import List from 'containers/List';
import Single from 'containers/Single';

// resin.io components
import Footer from 'components/Footer';
import Logo from 'components/Logo';
import NotFound from 'components/NotFound';
import { CoverImage, Vertical } from 'components/CoverImage';

import bgImg from './static/images/cover.png';
import logoImg from './static/images/logo.png';

import { URL, BLOG_TITLE } from './settings';

const routeHandler = () => {
  if (typeof window.ga !== 'undefined') {
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
    window.ga('set', 'page', window.location.pathname);
    window.ga('send', 'pageview');
  }
  if (typeof window._gs !== 'undefined') {
    // https://www.gosquared.com/docs/api/javascript-tracking-code/track-pageviews
    window._gs('track');
    window._gs('track', window.location.pathname, document.title);
  }
};

const App = (props) => {
  return (
    <div>
      <CoverImage image={bgImg} height={props.children.type.name === 'Single' ? '30vh' : '60vh'}>
        <Vertical>
          <Link to={'/'}><Logo image={logoImg}/></Link>
        </Vertical>
      </CoverImage>
      {props.children}
      <Footer title={BLOG_TITLE} url={URL} copyright='2013-2016'/>
    </div>
  );
};

render(
  <Router history={browserHistory} onUpdate={routeHandler}>
    <Route path="/" component={App}>
      <IndexRoute component={List}/>
      <Route path="page/:pageNumber" component={List}/>
      <Route path="tag/:tagName" component={List}/>
      <Route path="tag/:tagName/page/:pageNumber" component={List}/>
      <Route path=":postSlug" component={Single}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
, document.getElementById('root'));
