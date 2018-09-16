import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Label = ({
  name,
  tagNames,
  itemIndex,
  removeItem,
}) => (
  <li className="create-tags-bar-label">
    {name}
    <span
      className="create-tags-bar-label-delete-btn"
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
  itemIndex: PropTypes.number.isRequired,
};

export default Label;
