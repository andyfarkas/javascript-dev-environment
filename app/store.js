import React from 'react';
import { clone } from './utils.js';
import assert from 'assert';

let state;
const stateChangeListeners = [];

export function create(initialState) {
  state = initialState;
  return state;
}

export function trigger(updaterFunction) {
  state = updaterFunction(state);
  stateChangeListeners.forEach((listener) => {
    listener.handleStateChange(state);
  });
}

export function fetch(stateFetcherFunction) {
  return stateFetcherFunction(state);
}


export function connect(stateFetcher, Component) {
  let lastProps = null;

  class ConnectedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleStateChange = this.handleStateChange.bind(this);
      stateChangeListeners.push(this);
    }

    handleStateChange(newState) {
      const newProps = stateFetcher(newState);

      try {
        assert.deepEqual(lastProps, newProps);
      } catch (e) {
        lastProps = clone(newProps);
        this.setState(newProps);
      }
    }

    render() {
      const props = stateFetcher(state);
      return <Component {...props} />;
    }
  }

  return ConnectedComponent;
}

