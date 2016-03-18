
export const reduce = (type, callback) => (state, action) => {
  if (action.type === type) {
    return callback(state, action);
  }

  return state;
};
