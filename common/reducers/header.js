import { MENU_CLICK } from '../actions/header';

const header = (state = false, action) => {
  switch (action.type) {
    case MENU_CLICK:
      return !state;
    default:
      return state;
  }
};

export default header;
