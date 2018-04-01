import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const CategoryItem = ({ items = [], month, labelId }) => (
  <label className="category-item-label" htmlFor={labelId}>
    <span className="category-month">{month}月</span>
    <input id={labelId} type="checkbox" />
    <span className="fa" />
    <div className="category-article-list">
      {items.map(title => <span className="category-article-title" title={title} >{title}</span>)}
    </div>
  </label>
);

CategoryItem.defaultProps = {
  items: [],
};

CategoryItem.propTypes = {
  labelId: PropTypes.string.isRequired,
  month: PropTypes.number.isRequired,
  items: PropTypes.array,
};

export default CategoryItem;
