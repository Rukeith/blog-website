import { CREATE_COMMENT, TYPING_COMMENT, TYPING_COMMENT_NAME } from '../actions/commentForm';

const initialState = {
  name: '',
  comment: '',
};

export default (state = initialState, action) => {
  const {
    type,
    name,
    comment,
  } = action;

  switch (type) {
    case CREATE_COMMENT:
      return Object.assign({}, state, { name, comment });
    case TYPING_COMMENT:
      return Object.assign({}, state, { comment });
    case TYPING_COMMENT_NAME:
      return Object.assign({}, state, { name });
    default:
      return state;
  }
};
