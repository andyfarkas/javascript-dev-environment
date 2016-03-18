import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import apiMiddleware from './middleware/api.js';

const loggerMiddleware = createLogger();

const initialState = Immutable.fromJS({
  quote: {
    quote: 'Hello world.',
    author: 'A developer',
  },
});

export default () => {
  const store = createStore(rootReducer, initialState, applyMiddleware(
    apiMiddleware,
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
