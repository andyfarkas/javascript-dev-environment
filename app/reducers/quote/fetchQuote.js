
export default (state, action) => {
  let newState = Object.assign({}, state);
  if (action.type === 'FETCH_QUOTE') {
    newState = {
      quote: action.quote,
      author: action.author,
    };
  }

  return newState;
};
