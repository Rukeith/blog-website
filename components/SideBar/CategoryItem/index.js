import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import './style.scss';

const CategoryItem = ({ items = [], month, labelId }) => (
  <label className="category-item-label" htmlFor={labelId}>
    <span className="category-month">{month}</span>
    <input id={labelId} type="checkbox" />
    <span className="fa" />
    <div className="category-article-list">
      {items.map(({ url, title }) => (
        <Link href={url} key={url}>
          <span className="category-article-title" title={title}>
            {title}
          </span>
        </Link>
      ))}
    </div>
  </label>
);

CategoryItem.defaultProps = {
  items: [],
};

CategoryItem.propTypes = {
  items: PropTypes.array,
  month: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
};

export default CategoryItem;
