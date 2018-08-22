import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const createBreadcrumb = (breadcrumb = []) => {
  const bread = breadcrumb.join(' >> ');
  return (bread) ? (<strong>{bread}</strong>) : null;
};

const Breadcrumb = ({ breadcrumb = [] }) => (
  <div className="article-breadcrumb">
    {createBreadcrumb(breadcrumb)}
  </div>
);

Breadcrumb.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
};

export default Breadcrumb;
