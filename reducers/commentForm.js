import { CREATE_COMMENT, TYPING_COMMENT, TYPING_COMMENT_NAME } from '../actions/commentForm';

const initialState = {
  name: '',
  comment: '',
  comments: [],
};

export default (state = initialState, action) => {
  const {
    type,
    name,
    comment,
    comments,
  } = action;

  switch (type) {
    case CREATE_COMMENT:
      return Object.assign({}, state, { name, comment, comments });
    case TYPING_COMMENT:
      return Object.assign({}, state, { comment });
    case TYPING_COMMENT_NAME:
      return Object.assign({}, state, { name });
    default:
      return state;
  }
};
