import { LOGOUT } from '../actions/logout';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case LOGOUT:
    default:
      return state;
  }
};
