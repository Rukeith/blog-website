import { GET_TAGS } from '../actions/tableView';

const initialState = {
  tags: [],
};

export default (state = initialState, action) => {
  const { type, tags } = action;

  switch (type) {
    case GET_TAGS:
      return Object.assign({}, state, { tags });
    default:
      return state;
  }
};
