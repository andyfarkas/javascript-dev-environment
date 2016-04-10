import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RandomQuote from './containers/RandomQuote/RandomQuote.jsx';
import { create as createStore } from './store.js';
import Immutable from 'immutable';

createStore(Immutable.fromJS({
  quote: {
    quote: 'hello',
    author: 'me',
  },
}));

ReactDOM.render(
  <RandomQuote
    author="me"
    quaote="what"
  />,
  document.getElementById('app')
);
