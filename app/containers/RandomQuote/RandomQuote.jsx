
import Quote from './../../components/Quote/Quote.jsx';
import React from 'react';
import fetchQuote from './../../actions/quote/fetchQuote';

class RandomQuote extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
    this._fetchQuote = this._fetchQuote.bind(this);
  }

  componentDidMount() {
    this._fetchQuote();
  }

  _fetchQuote() {
    const { dispatch } = this.props;
    dispatch(fetchQuote());
  }

  handleNewQuoteClick() {
    this._fetchQuote();
  }

  render() {
    const { quote } = this.props;
    return (
      <Quote
        quote={quote.quote}
        author={quote.author}
        onNewQuoteClick={this.handleNewQuoteClick}
      />
    );
  }
}

RandomQuote.propTypes = {
  dispatch: React.PropTypes.function.isRequired,
  quote: React.PropTypes.shape({
    quote: React.PropTypes.string,
    author: React.PropTypes.string,
  }).isRequired,
};
