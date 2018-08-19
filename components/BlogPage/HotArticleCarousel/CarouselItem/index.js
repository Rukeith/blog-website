import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const checkContentImage = coverImage => (
  coverImage
    ? <img className="carousel-hot-article-coverImage" alt="Hot Article CoverImage" src={coverImage} />
    : <div className="carousel-content-mask" />
);

const CarouselItem = ({
  url,
  title,
  content,
  coverImage = '',
}) => (
  <div className="carousel-item">
    { checkContentImage(coverImage) }
    <h3>
      { title }
    </h3>
    <div className="carousel-item-mask">
      <a href={url} target="_blank" rel="noopener noreferrer">
        { content }
      </a>
    </div>
  </div>
);

CarouselItem.defaultProps = {
  coverImage: '',
};

CarouselItem.propTypes = {
  coverImage: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CarouselItem;
