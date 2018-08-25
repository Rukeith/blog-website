import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from '../lib/axios';
import Header from '../containers/Header';
import MyApp from '../containers/ArticlePage';
import '../static/styles.scss';
import '../static/animate.min.scss';

class App extends Component {
  static async getInitialProps({ query: { articleId } }) {
    // const data = await axios.get(`/articles/${articleId}`);
    console.log('articleId =', articleId);
    return {};
  }

  render() {
    const { title } = this.props;

    return (
      <div className="main">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Header />
        <MyApp />
      </div>
    );
  }
}

App.defaultProps = {
  title: 'Welcome to Rukeith\'s Blog',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
