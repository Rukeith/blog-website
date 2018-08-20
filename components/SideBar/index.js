import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import SocialBar from '../SocialBar';
import './style.scss';

const SideBar = ({ year, list }) => (
  <div id="side-bar">
    <SocialBar />
    <div id="calendar-category">
      <span className="category-year">
        {year}
      </span>
      {
        Object.keys(list).map((month) => {
          const key = `calendar-${year}-${month}`;
          return <CategoryItem key={key} labelId={key} items={list[month]} month={month} />;
        })
      }
    </div>
  </div>
);

SideBar.propTypes = {
  year: PropTypes.number.isRequired,
  list: PropTypes.object.isRequired,
};

export default SideBar;
