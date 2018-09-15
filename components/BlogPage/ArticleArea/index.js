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
          articles.map(({
            url,
            title,
            begins,
            coverImage,
          }) => (
            <ArticleCard
              url={url}
              key={url}
              title={title}
              begins={begins}
              coverImage={coverImage}
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
