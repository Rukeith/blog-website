import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../containers/Header';
import MyApp from '../containers/BlogPage';
import '../static/styles.scss';
import '../static/animate.min.scss';

const App = ({ title }) => (
  <div className="main">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Header />
    <MyApp />
    <Footer />
  </div>
);

App.defaultProps = {
  title: 'Welcome to Rukeith\'s Blog',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
