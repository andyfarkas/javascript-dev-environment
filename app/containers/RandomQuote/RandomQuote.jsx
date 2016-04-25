import React from 'react';
import { makeStoreAware } from './../../state/storeAware.js';
import Quote from './../../components/Quote/Quote.jsx';
import changeQuote from './../../actions/changeQuote';
import fetchQuote from './../../actions/fetchQuote';

class RandomQuote extends React.Component {

  constructor(props) {
    super(props);
    this._handleNewQuoteClick = this._handleNewQuoteClick.bind(this);
  }

  async componentWillMount() {
    const { trigger } = this.props;
    const quote = await fetchQuote();
    trigger(changeQuote(quote.quote, quote.author));
  }

  async _handleNewQuoteClick() {
    const { trigger } = this.props;
    const quote = await fetchQuote();
    trigger(changeQuote(quote.quote, quote.author));
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
  trigger: React.PropTypes.func,
};

function fetchFromState(state) {
  return {
    quote: state.get('quote').toJS(),
  };
}

export default makeStoreAware(fetchFromState, RandomQuote);
