import { combineReducers } from 'redux';
import login from './login';
import logout from './logout';
import header from './header';
import tagsInput from './tagsInput';
import tableView from './tableView';

const rootReducer = combineReducers({
  login,
  logout,
  header,
  tagsInput,
  tableView,
});

export default rootReducer;
