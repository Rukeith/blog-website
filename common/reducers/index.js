import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import header from './header';

const rootReducer = combineReducers({
  router: routerReducer,
  header,
});

export default rootReducer;
