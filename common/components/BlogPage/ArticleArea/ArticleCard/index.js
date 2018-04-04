import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ArticleCard = ({
  // articleId,
  title,
  begins,
  coverImage = '',
}) => (
  <div className="article-card">
    {
      coverImage && <img className="article-card-coverImage" alt="article-card-coverImage" src={coverImage} />
    }
    <div className="article-card-synopsis">
      <h1 className="article-card-title">{title}</h1>
      <p className="article-card-begins">{begins}</p>
    </div>
  </div>
);

ArticleCard.defaultProps = {
  coverImage: '',
};

ArticleCard.propTypes = {
  // articleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  begins: PropTypes.string.isRequired,
  coverImage: PropTypes.string,
};

export default ArticleCard;
