import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from '../../ArticleCard';
import './style.scss';

// const ArticleArea = ({ articles }) => ;
class ArticleArea extends Component {
  async componentDidMount() {
    const { getArticles } = this.props;
    await getArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <section id="article-area">
        {
          articles.map(item => (
            <ArticleCard
              url={item.url}
              key={item.title}
              title={item.title}
              begins={item.begins}
              coverImage={item.coverImage}
              browserUrl={item.browserUrl}
            />
          ))
        }
      </section>
    );
  }
}

ArticleArea.defaultProps = {
  articles: [],
};

ArticleArea.propTypes = {
  articles: PropTypes.array,
};

export default ArticleArea;
