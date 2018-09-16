import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import SocialBar from '../SocialBar';
import './style.scss';

class SideBar extends Component {
  async componentDidMount() {
    const { getCategories } = this.props;
    await getCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div id="side-bar">
        <SocialBar />
        <div id="calendar-category">
          {
            Object.keys(categories).map((year) => {
              const list = categories[year];
              return (
                <div className="category-item" key={year}>
                  <span className="category-year">{year}</span>
                  {
                    Object.keys(list).map((month) => {
                      const key = `calendar-${year}-${month}`;
                      return (
                        <CategoryItem key={key} labelId={key} items={list[month]} month={month} />
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  categories: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
};

export default SideBar;
