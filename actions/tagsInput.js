import axios from '../lib/axios';

export const CREATE_TAGS = 'CREATE_TAGS';
export const SET_NEW_TAG = 'SET_NEW_TAG';
export const SKIP_TYPING = 'SKIP_TYPING';
export const TYPING_NEW_TAG = 'TYPING_NEW_TAG';
export const REMOVE_NEW_TAG = 'REMOVE_NEW_TAG';

export const createTags = (event, tagName) => {
  event.preventDefault();

  return async (dispatch) => {
    await axios.post('/tags', { names: [tagName] }, {
      headers: {
        'Rukeith-Token': 'fake-token',
      },
    });

    return dispatch({
      tagNames: [],
      typingName: '',
      type: CREATE_TAGS,
    });
  };
};

export const setNewTag = (keyCode, newName, tagNames, typingName) => {
  console.log('keyCode =', keyCode);
  console.log('newName =', newName);
  console.log('tagNames =', tagNames);
  console.log('typingName =', typingName);

  if (keyCode === 13) {
    return {
      type: SET_NEW_TAG,
      typingName: '',
      tagNames: [...tagNames, newName],
    };
  }
  if (keyCode === 8 && tagNames.length && !typingName) {
    return {
      type: SET_NEW_TAG,
      typingName,
      tagNames: tagNames.slice(0, tagNames.length - 1),
    };
  }

  return {
    type: SKIP_TYPING,
  };
};

export const typingNewTag = typingName => ({
  typingName,
  type: TYPING_NEW_TAG,
});

export const removeNewTag = (index, tagNames) => ({
  type: REMOVE_NEW_TAG,
  tagNames: tagNames.filter((item, i) => i !== index),
});
