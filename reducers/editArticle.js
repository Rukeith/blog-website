import {
  SAVE_ARTICLE,
  TYPING_TITLE,
  TYPING_URL,
  TYPING_CATEGORY,
} from '../actions/editArticle';

const initialState = {
  typingTitle: '',
  typingUrl: '',
  typingCategory: '',
};

export default (state = initialState, action) => {
  const {
    type,
    typingTitle,
    typingUrl,
    typingCategory,
  } = action;

  switch (type) {
    case SAVE_ARTICLE:
      return Object.assign({}, state, initialState);
    case TYPING_TITLE:
      return Object.assign({}, state, { typingTitle });
    case TYPING_URL:
      return Object.assign({}, state, { typingUrl });
    case TYPING_CATEGORY:
      return Object.assign({}, state, { typingCategory });
    default:
      return state;
  }
};
