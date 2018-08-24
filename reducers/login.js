import { LOGIN, TYPING_USERNAME, TYPING_PASSWORD } from '../actions/login';

const initialState = {
  username: '',
  password: '',
};

export default (state = initialState, action) => {
  const { type, username, password } = action;

  switch (type) {
    case LOGIN:
      return Object.assign({}, state, initialState);
    case TYPING_USERNAME:
      return Object.assign({}, state, { username });
    case TYPING_PASSWORD:
      return Object.assign({}, state, { password });
    default:
      return state;
  }
};
