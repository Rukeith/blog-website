import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Label = ({ name, tagNames, itemIndex, removeNewTag }) => (
  <li className="new-tag-item">
    {name}
    <span
      className="delete-new-tag-btn"
      role="button"
      tabIndex={itemIndex}
      onKeyUp={
        (event) => {
          event.preventDefault();
          console.log('removeNewTag =', removeNewTag);
          removeNewTag(itemIndex, tagNames);
        }
      }
    >
      (x)
    </span>
  </li>
);

Label.propTypes = {
  name: PropTypes.string.isRequired,
  tagNames: PropTypes.array.isRequired,
  itemIndex: PropTypes.string.isRequired,
  removeNewTag: PropTypes.func.isRequired,
};

export default Label;
