import { combineReducers } from 'redux';
import login from './login';
import logout from './logout';
import header from './header';
import tagsInput from './tagsInput';
import tableView from './tableView';
import articleArea from './articleArea';

const rootReducer = combineReducers({
  login,
  logout,
  header,
  tagsInput,
  tableView,
  articleArea,
});

export default rootReducer;
