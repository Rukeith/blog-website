import thunk from 'redux-thunk';
import createHistory from 'history/createMemoryHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
  const routerReducers = routerMiddleware(createHistory());
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk, routerReducers)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
};

export default configureStore;
