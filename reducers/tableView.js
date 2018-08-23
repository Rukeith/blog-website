import { GET_TAGS, RENAME_TAG } from '../actions/tableView';

const initialState = {
  tags: [],
};

export default (state = initialState, action) => {
  const { type, tags } = action;

  switch (type) {
    case GET_TAGS:
    case RENAME_TAG:
      return Object.assign({}, state, { tags });
    default:
      return state;
  }
};
