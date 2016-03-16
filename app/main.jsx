import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './components/Quote/Quote.jsx';

ReactDOM.render(
  <Quote
    quote="Hello world"
    author="Andy"
  />,
  document.getElementById('app')
);
