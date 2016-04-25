import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RandomQuote from './containers/RandomQuote/RandomQuote.jsx';
import { createStore } from './state/store.js';
import Immutable from 'immutable';
import StoreProvider from './state/StoreProvider';

const store = createStore(Immutable.fromJS({
  quote: {
    quote: null,
    author: null,
  },
}));

ReactDOM.render(
  <StoreProvider store={store}>
    <RandomQuote />
  </StoreProvider>,
  document.getElementById('app')
);
