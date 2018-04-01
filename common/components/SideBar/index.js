import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import SocialBar from '../SocialBar';
import './style.scss';

const categories = {
  '03': [
    'article one',
    'article two',
  ],
  '04': [
    'article one',
    'article two',
    'article three',
  ],
};

const SideBar = ({ year = new Date().getFullYear(), list = categories }) => (
  <section id="side-bar">
    <SocialBar />
    <section id="calendar-category">
      <span className="category-year">{year}</span>
      {
        Object.keys(list).map((month) => {
          const key = `calendar-${year}-${month}`;
          return <CategoryItem key={key} labelId={key} items={list[month]} month={month} />;
        })
      }
    </section>
  </section>
);

SideBar.propTypes = {
  year: PropTypes.number.isRequired,
  list: PropTypes.object.isRequired,
};

export default SideBar;
