import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import MyApp from '../components/EditArticlePage';
import '../static/styles.scss';
import '../static/animate.min.scss';

class App extends Component {
  static getInitialProps({ query: { articleId } }) {
    return { articleId };
  }

  render() {
    const { title, articleId } = this.props;

    return (
      <div className="main">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Header />
        <MyApp articleId={articleId} />
      </div>
    );
  }
}

App.defaultProps = {
  title: 'Welcome to Rukeith\'s Blog',
};

App.propTypes = {
  title: PropTypes.string,
  articleId: PropTypes.string.isRequired,
};

export default App;
