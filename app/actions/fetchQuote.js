import fetch from 'isomorphic-fetch';

export default async() => {
  const response = await fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', {
    method: 'post',
    headers: {
      'X-Mashape-Key': '4uhzk1qOIumshsPqUAGzID9M6xi6p17BEJijsnuCKUiV1YE1I7',
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  });
  return await response.json();
};
