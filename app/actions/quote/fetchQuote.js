
export default () => (
  {
    type: 'FETCH_QUOTE',
    __api: {
      method: 'post',
      path: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      headers: {
        'X-Mashape-Key': '4uhzk1qOIumshsPqUAGzID9M6xi6p17BEJijsnuCKUiV1YE1I7',
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    },
  }
);
