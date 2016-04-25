import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RandomQuote from './containers/RandomQuote/RandomQuote.jsx';
import { createStore } from './state/store.js';
import Immutable from 'immutable';
import StoreProvider from './state/StoreProvider';

const store = createStore(Immutable.fromJS({
  quote: {
    quote: 'hello',
    author: 'me',
  },
}));

ReactDOM.render(
  <StoreProvider store={store}>
    <RandomQuote
      author="me"
      quaote="what"
    />
  </StoreProvider>,
  document.getElementById('app')
);
