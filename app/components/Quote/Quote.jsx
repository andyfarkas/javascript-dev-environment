import React from 'react';
import styles from './Quote.less';

const Quote = ({ quote, author }) => (
  <div className={styles.box}>
    <div className={styles.innetBox}>
      <div className={styles.quote}>
        <p>{quote}</p>
      </div>
      <span> - {author}</span>
    </div>
  </div>
);

Quote.propTypes = {
  quote: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
};

export default Quote;
