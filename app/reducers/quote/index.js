
import fetchQuote from './fetchQuote.js';

export default (state, action) => {
  let newState = Object.assign({}, state);
  newState = fetchQuote(newState, action);
  return newState;
};
