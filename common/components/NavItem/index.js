import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NavItem = ({ title, path }) => (
  <div className="header-nav-item">
    <NavLink className="header-nav-item-link" exact to={path}>
      {title}
    </NavLink>
  </div>
);

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
