import * as React from 'react';
import { render } from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
// import store from './store';

render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
);
