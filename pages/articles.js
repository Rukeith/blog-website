import React, { Component } from 'react';
import marked from 'marked';
import Head from 'next/head';
import hljs from 'highlight.js';
import PropTypes from 'prop-types';
import axios from '../lib/axios';
import Header from '../containers/Header';
import MyApp from '../containers/ArticlePage';
import hightlightConfig from '../config/hightlight.json';
import '../static/styles.scss';
import '../static/animate.min.scss';

hljs.configure(hightlightConfig);
marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

class App extends Component {
  static async getInitialProps({ query: { articleUrl } }) {
    const {
      data: {
        data: {
          _id: id,
          url,
          title,
          content,
          category,
          publishedAt,
        },
      },
    } = await axios.get(`/articles/${articleUrl}`, {
      params: {
        fields: 'content,title,url,category,publishedAt',
      },
    });

    const formatContent = marked(content);

    return {
      article: {
        id,
        url,
        title,
        publishedAt,
        content: formatContent,
        breadcrumb: category.split('>'),
      },
    };
  }

  render() {
    const { title, article } = this.props;

    return (
      <div className="main">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Header />
        <MyApp article={article} />
        <style jsx global>
        {`
          #__next,
          .main {
            min-height: 100%;
          }
        `}
        </style>
      </div>
    );
  }
}

App.defaultProps = {
  title: 'Welcome to Rukeith\'s Blog',
};

App.propTypes = {
  title: PropTypes.string,
  article: PropTypes.object.isRequired,
};

export default App;
