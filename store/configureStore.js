import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  const logger = createLogger({ collapsed: true });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, logger)),
  );
};

export default configureStore;
