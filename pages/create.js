import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from '../lib/axios';
import Header from '../containers/Header';
import MyApp from '../containers/EditArticle';
import '../static/styles.scss';
import '../static/animate.min.scss';

class App extends Component {
  static async getInitialProps({ query: { articleId } }) {
    if (articleId) {
      const {
        data: {
          data: {
            url,
            title,
            content,
            category,
          },
        },
      } = await axios.get(`/articles/${articleId}`, {
        params: {
          filterKey: 'id',
          fields: 'url,title,content,category',
        },
      });

      return {
        article: {
          articleId,
          url,
          title,
          content,
          category: category.replace('>', ','),
        },
      };
    }

    return {};
  }

  render() {
    const {
      title,
      article: {
        articleId,
        url,
        title: articleTitle,
        content,
        category,
      },
    } = this.props;

    return (
      <div className="main">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Header />
        <MyApp
          articleId={articleId}
          url={url}
          title={articleTitle}
          content={content}
          category={category}
        />
        <style jsx global>
        {`
          #__next,
          .main {
            height: 100%;
          }
        `}
        </style>
      </div>
    );
  }
}

App.defaultProps = {
  title: 'Edit Article',
  article: {},
};

App.propTypes = {
  title: PropTypes.string,
  article: PropTypes.object,
};

export default App;
