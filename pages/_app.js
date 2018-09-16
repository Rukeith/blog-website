import React from 'react';
import Router from 'next/router';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import configureStore from '../store/configureStore';

library.add(faPaperPlane);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    if (ctx && ctx.req) {
      if (ctx.req.url === '/blog') {
        ctx.res.writeHead(301, { Location: '/' });
        ctx.res.end();
      }
    }

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  componentDidMount() {
    const { router } = this.props;
    const token = localStorage.getItem('blog-admin-token');
    if (!token && (router.pathname === '/admin' || router.pathname === '/create')) {
      Router.replace('/');
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(MyApp);
