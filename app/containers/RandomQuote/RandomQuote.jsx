import React from 'react';
import { makeStoreAware } from './../../state/storeAware.js';
import Quote from './../../components/Quote/Quote.jsx';
import { trigger } from './../../state/store.js';
import changeQuote from './../../actions/changeQuote';

class RandomQuote extends React.Component {

  constructor(props) {
    super(props);
    this._handleNewQuoteClick = this._handleNewQuoteClick.bind(this);
  }

  _handleNewQuoteClick() {
    const { trigger } = this.props;
    trigger(changeQuote('changed', 'me again'));
  }

  render() {
    const { quote } = this.props;
    return (
      <Quote
        quote={quote.quote}
        author={quote.author}
        onNewQuoteClick={this._handleNewQuoteClick}
      />
    );
  }
}

RandomQuote.propTypes = {
  quote: React.PropTypes.shape({
    quote: React.PropTypes.string,
    author: React.PropTypes.string,
  }).isRequired,
};

function fetchFromState(state) {
  return {
    quote: state.get('quote').toJS(),
  };
}

export default makeStoreAware(fetchFromState, RandomQuote);
