import {
  CREATE_TAGS,
  SET_NEW_TAG,
  SKIP_TYPING,
  TYPING_NEW_TAG,
  REMOVE_NEW_TAG,
} from '../actions/tagsInput';

const initialState = {
  tagNames: [],
  typingName: '',
};

export default (state = initialState, action) => {
  const { type, tagNames, typingName } = action;

  switch (type) {
    case CREATE_TAGS:
      return Object.assign({}, state, initialState);
    case SET_NEW_TAG:
      return Object.assign({}, state, { tagNames, typingName });
    case TYPING_NEW_TAG:
      return Object.assign({}, state, { typingName });
    case REMOVE_NEW_TAG:
      return Object.assign({}, state, { tagNames });
    case SKIP_TYPING:
    default:
      return state;
  }
};
