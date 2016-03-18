
import React from 'react';
import { connect } from 'react-redux';
import Quote from './../../components/Quote/Quote.jsx';
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
  dispatch: React.PropTypes.func.isRequired,
  quote: React.PropTypes.shape({
    quote: React.PropTypes.string,
    author: React.PropTypes.string,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state) {
  return {
    quote: state.quote,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuote);

