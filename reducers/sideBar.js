import { GET_ARTICLES_CATEGORY } from '../actions/sideBar';

const initialState = {
  categories: {},
};

export default (state = initialState, action) => {
  const {
    type,
    categories,
  } = action;

  switch (type) {
    case GET_ARTICLES_CATEGORY:
      return Object.assign({}, state, { categories });
    default:
      return state;
  }
};
