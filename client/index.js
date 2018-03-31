import 'animate.css';
import axios from 'axios';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './index.css';
import routes from '../common/routes';
import configureStore from '../common/store/configureStore';

axios.defaults.baseURL = process.env.SERVER_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);
const supportsHistory = 'pushState' in window.history;

hydrate(
  <Provider store={store}>
    <BrowserRouter forceRefresh={!supportsHistory}>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
