
import React from 'react';

export default class StoreProvider extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.store = props.store;
    this.getChildContext = this.getChildContext.bind(this);
  }

  getChildContext() {
    return { store: this.store };
  }

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }

}

StoreProvider.propTypes = {
  store: React.PropTypes.object.isRequired,
  children: React.PropTypes.element,
};

StoreProvider.childContextTypes = {
  store: React.PropTypes.object.isRequired,
};

