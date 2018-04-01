import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const CarouselItem = ({
  title,
  url,
  content,
  coverImage = '',
}) => (
  <div className="carousel-item">
    {
      coverImage && <img className="carousel-content-cover-image" alt="hot-article-coverImage" src={coverImage} />
    }
    <h3>{title}</h3>
    <div className="carousel-item-mask">
      <a href={url} target="_blank">{content}</a>
    </div>
  </div>
);

CarouselItem.defaultProps = {
  coverImage: '',
};

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  coverImage: PropTypes.string,
};

export default CarouselItem;
