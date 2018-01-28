import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { render } from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Route, Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
require('./css/stylesheet.css');

render(
  <Router history={createBrowserHistory()}>
     <App />
  </Router>,
  document.getElementById('root')
);
