import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import './style.scss';

const TagsInput = ({
  tagNames,
  typingName,
  setNewTag,
  createTags,
  typingNewTag,
  removeNewTag,
}) => (
  <form
    id="create-tag-form"
    acceptCharset="utf-8"
  >
    <label id="create-tags-bar" htmlFor="create-tags-input">
      <ul id="create-tags-bar-labels">
        {
          tagNames.map((item, i) => (
            <Label name={item} tagNames={tagNames} removeItem={removeNewTag} itemIndex={i} />
          ))
        }
        <input
          type="text"
          value={typingName}
          id="create-tags-bar-text"
          placeholder="Create new tags"
          onChange={event => typingNewTag(event.target.value)}
          onKeyUp={event => setNewTag(event.keyCode, event.target.value, tagNames)}
        />
      </ul>
    </label>
    <button type="submit" id="create-tags-btn" onClick={event => createTags(event, tagNames)}>Create</button>
  </form>
);

TagsInput.defaultProps = {
  tagNames: [],
  typingName: '',
};

TagsInput.propTypes = {
  tagNames: PropTypes.array,
  typingName: PropTypes.string,
  setNewTag: PropTypes.func.isRequired,
  createTags: PropTypes.func.isRequired,
  typingNewTag: PropTypes.func.isRequired,
  removeNewTag: PropTypes.func.isRequired,
};

export default TagsInput;
