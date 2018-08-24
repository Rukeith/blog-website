import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Label = ({
  name,
  tagNames,
  itemIndex,
  removeItem,
}) => (
  <li className="new-tag-item">
    {name}
    <span
      className="delete-new-tag-btn"
      role="button"
      tabIndex={itemIndex}
      onMouseUp={() => removeItem(name, tagNames)}
    >
      (x)
    </span>
  </li>
);

Label.propTypes = {
  name: PropTypes.string.isRequired,
  tagNames: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  itemIndex: PropTypes.string.isRequired,
};

export default Label;
