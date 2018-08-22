import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import './style.scss';

const NavItem = ({ title, path }) => (
  <div className="header-nav-item">
    <Link prefetch href={path}>
      <a className="header-nav-item-link" href={path}>{title}</a>
    </Link>
  </div>
);

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
