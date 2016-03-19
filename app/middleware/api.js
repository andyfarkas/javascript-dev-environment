import fetch from 'isomorphic-fetch';

function requestAction(actionType) {
  return {
    type: `REQUEST_${actionType}`,
  };
}

function responseAction(actionType, data) {
  return {
    type: actionType,
    ...data,
  };
}

function errorAction(message) {
  return {
    type: 'ERROR',
    message,
  };
}

export const runApiAction = async (action, next) => {
  if (!action.__api) {
    return next(action);
  }

  const apiAction = action.__api;
  const headers = apiAction.headers || {};
  next(requestAction(action.type));

  const options = {
    method: apiAction.method,
    headers: {
      ...headers,
    },
  };

  if (apiAction.data) {
    options.body = JSON.stringify(apiAction.data);
  }

  try {
    const response = await fetch(apiAction.path, options);
    let result = await response.json();

    if (apiAction.resultFormatter) {
      result = action.api.resultFormatter(result);
    }

    return next(responseAction(action.type, result));
  } catch (e) {
    return next(errorAction(e.toString()));
  }
};

export default () => (next) => async (action) => (
  runApiAction(action, next)
);

