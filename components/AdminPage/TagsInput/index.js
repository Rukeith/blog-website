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
    onSubmit={event => createTags(event, typingName)}
  >
    <label id="create-tags" htmlFor="create-tags-input">
      <ul>
        {
          tagNames.map((item, i) => (
            <Label name={item} tagNames={tagNames} removeItem={removeNewTag} itemIndex={i} />
          ))
        }
        <input
          required
          type="text"
          value={typingName}
          id="create-tags-input"
          placeholder="Create new tags"
          onChange={event => typingNewTag(event.target.value)}
          onKeyDown={
            event => setNewTag(event.keyCode, event.target.value, tagNames, typingName)
          }
        />
      </ul>
    </label>
    <button type="submit" className="create-tag-btn">Create</button>
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
