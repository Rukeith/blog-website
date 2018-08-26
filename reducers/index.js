import { combineReducers } from 'redux';
import login from './login';
import logout from './logout';
import header from './header';
import sideBar from './sideBar';
import tagsInput from './tagsInput';
import tableView from './tableView';
import articleArea from './articleArea';
import commentForm from './commentForm';
import commentList from './commentList';

const rootReducer = combineReducers({
  login,
  logout,
  header,
  sideBar,
  tagsInput,
  tableView,
  articleArea,
  commentForm,
  commentList,
});

export default rootReducer;
