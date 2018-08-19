import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const checkContentImage = (coverImage) => {
  if (coverImage) {
    return (
      <div className="article-card-coverImage">
        <img className="article-card-coverImage-img" alt="Article Card CoverImage" src={coverImage} />
      </div>
    );
  }

  return null;
};

const ArticleCard = ({
  url,
  title,
  content,
  coverImage,
}) => (
  <div className="article-card">
    {checkContentImage(coverImage)}
    <div className="article-card-block">
      <h1 className="article-card-block-title">
        <a href={url}>{title}</a>
      </h1>
      <div className="article-card-block-content">{content}</div>
      <strong>
        <a className="article-card-block-read-more" href={url}>Read More &#62;&#62;&emsp;</a>
      </strong>
    </div>
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
