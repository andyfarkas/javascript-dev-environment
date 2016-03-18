
import fetchQuote from './fetchQuote.js';

export default (state = {}, action) => {
  let newState = state;
  newState = fetchQuote(newState, action);
  return newState;
};
