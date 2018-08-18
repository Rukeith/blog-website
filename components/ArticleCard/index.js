import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const checkContentImage = coverImage => (
  coverImage
    ? <img className="article-card-coverImage" alt="article-card-coverImage" src={coverImage} />
    : null
);

const ArticleCard = ({
  url,
  title,
  content,
  coverImage,
}) => (
  <div className="article-card">
    { checkContentImage(coverImage) }
    <h1 className="article-card-title">{title}</h1>
    <p className="article-card-content">{content}</p>
    <a className="article-card-read-more" href={url}>Read More</a>
  </div>
);

ArticleCard.defaultProps = {
  coverImage: '',
};

ArticleCard.propTypes = {
  coverImage: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ArticleCard;
