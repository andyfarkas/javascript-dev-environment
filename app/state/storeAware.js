
import assert from 'assert';
import React from 'react';

export function makeStoreAware(stateFetcher, Component) {
  let lastProps = null;

  class StoreAwareComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleStateChange = this.handleStateChange.bind(this);
    }

    handleStateChange(newState) {
      const newProps = stateFetcher(newState);

      try {
        assert.deepEqual(lastProps, newProps);
      } catch (e) {
        lastProps = newProps;
        this.setState(newProps);
      }
    }

    render() {
      this.context.store.register(this.handleStateChange);
      const props = stateFetcher(this.context.store.getState());
      props.trigger = this.context.store.update;
      return <Component {...props} />;
    }
  }

  StoreAwareComponent.contextTypes = {
    store: React.PropTypes.object,
  };

  return StoreAwareComponent;
}