import qs from 'qs';
import React from 'react';
import Express from 'express';
import webpack from 'webpack';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import configureStore from '../common/store/configureStore';
import routes from '../common/routes';
import { fetchCounter } from '../common/api/counter';

const webpackConfig = process.env.NODE_ENV === 'production' ? require('../webpack.prod') : require('../webpack.dev');

const app = new Express();
const port = 3000;

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  stats: {
    colors: true,
  },
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

const renderFullPage = (html, preloadedState) =>
  `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;

const handleRender = (req, res) => {
  // Query our mock API asynchronously
  fetchCounter((apiResult) => {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || apiResult || 0;

    // Compile an initial state
    const preloadedState = { counter };

    // Create a new Redux store instance
    const store = configureStore(preloadedState);
    const context = {};

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>,
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState));
  });
};

// This is fired every time the server side receives a request
app.use(handleRender);

if (module.hot) {
  module.hot.accept();
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
