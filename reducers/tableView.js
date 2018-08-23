import { GET_TAGS } from '../actions/tableView';

const initialState = {
  tags: [],
};

const tableView = (state = initialState, action) => {
  const { type, tags } = action;
  console.log('state xxxxx=', state);
  console.log('action xxxxx=', action);
  switch (type) {
    case GET_TAGS:
      return Object.assign({}, state, { tags });
    default:
      return state;
  }
};

export default tableView;
