import { curry } from 'ramda';

export default curry((quote, author, state) => (
  state.merge({
    quote: {
      quote: quote,
      author: author,
    }
  })
))
