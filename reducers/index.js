import { combineReducers } from 'redux';
import login from './login';
import header from './header';
import tagsInput from './tagsInput';
import tableView from './tableView';

const rootReducer = combineReducers({
  login,
  header,
  tagsInput,
  tableView,
});

export default rootReducer;
