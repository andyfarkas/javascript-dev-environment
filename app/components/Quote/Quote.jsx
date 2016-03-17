import React from 'react';
import styles from './Quote.less';

const Quote = ({ quote, author, onNewQuoteClick }) => (
  <div className={styles.box}>
    <div>
      <div className={styles.quote}>
        <p>{quote}</p>
      </div>
      <span> - {author}</span>
      <button onClick={onNewQuoteClick}>Click</button>
    </div>
  </div>
);

Quote.propTypes = {
  quote: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  onNewQuoteClick: React.PropTypes.func.isRequired,
};

export default Quote;
