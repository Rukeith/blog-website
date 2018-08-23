import { RESIZE, MENU_CLICK } from '../actions/header';

const initialState = {
  menuOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_CLICK:
      return Object.assign({}, state, { menuOpen: !state.menuOpen });
    case RESIZE:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};
