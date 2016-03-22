
import fetchQuote from './fetchQuote.js';
import { Map as map } from 'immutable';

export default (state = map({}), action) => {
  let newState = state;
  newState = fetchQuote(newState, action);
  return newState;
};
