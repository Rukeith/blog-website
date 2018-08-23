import { combineReducers } from 'redux';
import header from './header';
import tableView from './tableView';

const rootReducer = combineReducers({
  header,
  tableView,
});

export default rootReducer;
