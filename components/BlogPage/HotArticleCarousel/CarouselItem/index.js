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
      (() => {
        if (coverImage) {
          return <img className="carousel-hot-article-coverImage" alt="hot-article-coverImage" src={coverImage} />;
        }
        return <div className="carousel-content-mask" />;
      })()
    }
    <h3>
      {title}
    </h3>
    <div className="carousel-item-mask">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
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
