import React from 'react';
import { connect } from './../../store.js';
import Quote from './../../components/Quote/Quote.jsx';
import { update } from './../../store.js';

class RandomQuote extends React.Component {

  constructor(props) {
    super(props);
    this._handleNewQuoteClick = this._handleNewQuoteClick.bind(this);
  }

  _handleNewQuoteClick() {
    update((state) => (
      state.merge({
        quote: {
          quote: 'changed',
          author: 'me again',
        },
      })
    ));
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

export default connect(fetchFromState, RandomQuote);
