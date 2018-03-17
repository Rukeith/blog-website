import { MENU_CLICK, RESIZE } from '../actions/header';

const header = (state = false, action) => {
  switch (action.type) {
    case MENU_CLICK:
      return !state;
    case RESIZE:
      return false;
    default:
      return state;
  }
};

export default header;
