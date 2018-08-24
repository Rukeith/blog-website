import {
  GET_TAGS,
  RENAME_TAG,
  DELETE_TAG,
  GET_ARTICLES,
  DELETE_ARTICLE,
} from '../actions/tableView';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case GET_TAGS:
    case RENAME_TAG:
    case DELETE_TAG:
    case GET_ARTICLES:
    case DELETE_ARTICLE:
      return Object.assign({}, state, { data });
    default:
      return state;
  }
};
