const Koa = require('koa');
const path = require('path');
const cors = require('kcors');
const koaBody = require('koa-body');
const serve = require('koa-static');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const router = require('koa-router')();
const enforceHttps = require('koa-sslify');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { renderRoutes } = require('react-router-config');
const routes = require('../common/routes');

const app = new Koa();

if (process.env.NODE_ENV === 'production') {
  // Automatically redirects to an HTTPS address
  app.use(enforceHttps({ trustProtoHeader: true, trustAzureHeader: true }));
}

app
  //  It provides important security headers to make your app more secure by default.
  .use(helmet({ noCache: true, referrerPolicy: true }))
  // Enable ALL CORS Requests
  .use(cors({
    origin: '*',
    maxAge: 24 * 60 * 60,
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'PUT', 'DELETE', 'POST', 'PATCH', 'OPTIONS'],
  }))
  .use(logger())
  .use(koaBody())
  .use(serve(path.join(__dirname, 'dist')))
  .use(router.routes())
  .use(router.allowedMethods({ throw: true }));

router.get('*', async (ctx, next) => {
  const context = {};
  const content = renderToString(<StaticRouter location={ctx.url} context={context}> {renderRoutes(routes)} </StaticRouter>);

  ctx.render('index', { content });
  await next();
});

app.on('error', (err, ctx) => {
  try {
    const statusCode = ctx.status || 500;
    if (statusCode === 500) {
      console.error(err.stack || err);
    }
    ctx.response.status = statusCode;
    ctx.response.body = {
      extra: err.stack || err,
      status: statusCode,
    };
  } catch (error) { /* istanbul ignore next */
    console.error('Error handle fail :', error);
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.info('===========================================');
  console.info(`===== Server is running at port: ${port} =====`);
  console.info('===========================================');

  // Caught global exception error handle
  /* istanbul ignore next */
  process.on('uncaughtException', err => console.error('Caught exception: ', err.stack));
  /* istanbul ignore next */
  process.on('unhandledRejection', (reason, p) => console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack));
});

module.exports = app;
