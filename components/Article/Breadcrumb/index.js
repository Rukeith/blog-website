import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import './style.scss';

const Breadcrumb = ({ breadcrumb = [] }) => (
  <div className="article-breadcrumb">
    {
      breadcrumb.map((category, index) => {
        if (!category) return null;

        return (
          <div className="breadcrumb-link" key={category}>
            <Link prefetch href={`/categories/${category}`}>
              <strong>{category}</strong>
            </Link>
            {
              (index !== breadcrumb.length - 1) ? <span>{'>>'}</span> : null
            }
          </div>
        );
      })
    }
  </div>
);

Breadcrumb.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
};

export default Breadcrumb;
