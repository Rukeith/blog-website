import { GET_COMMENTS } from '../actions/commentList';

const initialState = {
  comments: [],
};

export default (state = initialState, action) => {
  const {
    type,
    comments,
  } = action;

  switch (type) {
    case GET_COMMENTS:
      return Object.assign({}, state, { comments });
    default:
      return state;
  }
};
