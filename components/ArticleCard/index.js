import React from 'react';
import Link from 'next/link';
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
        <Link prefetch href={url}>
          <a href={url}>{title}</a>
        </Link>
      </h1>
      <div className="article-card-block-content">{content}</div>
      <strong>
        <Link prefetch href={url}>
          <a className="article-card-block-read-more" href={url}>Read More &#62;&#62;&emsp;</a>
        </Link>
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
