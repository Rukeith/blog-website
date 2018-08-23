import { combineReducers } from 'redux';
import header from './header';
import tagsInput from './tagsInput';
import tableView from './tableView';

const rootReducer = combineReducers({
  header,
  tagsInput,
  tableView,
});

export default rootReducer;
