import { GET_ARTICLES_CARD } from '../actions/articleArea';

const initialState = {
  articles: [],
};

export default (state = initialState, action) => {
  const { type, articles } = action;

  switch (type) {
    case GET_ARTICLES_CARD:
      return Object.assign({}, state, { articles });
    default:
      return state;
  }
};
