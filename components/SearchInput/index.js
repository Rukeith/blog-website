import React from 'react';
import './style.scss';

export default () => (
  <div className="header-search-input">
    <input
      id="header-search"
      name="search"
      type="search"
      autoComplete="on"
      placeholder="Search..."
    />
  </div>
);
