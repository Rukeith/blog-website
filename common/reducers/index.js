import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import header from './header';
import counter from './counter';

const rootReducer = combineReducers({
  routing: routerReducer,
  header,
  counter,
});

export default rootReducer;
