
import { reduce } from './../../utils/redux-utils.js';

export default reduce('FETCH_QUOTE', (state, action) => (
  state.merge({
    quote: action.quote,
    author: action.author,
  })
));
