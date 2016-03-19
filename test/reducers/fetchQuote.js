
import createStore from './../../app/store.js';
import { expect } from 'chai';
import { Map } from 'immutable';

describe('fetchQuote reducer', () => {
  it('should set quote from action as current quote', () => {
    const store = createStore();
    store.dispatch({
      type: 'FETCH_QUOTE',
      quote: 'quote',
      author: 'author',
    });

    expect(store.getState().get('quote')).to.equal(Map({
      quote: 'quote',
      author: 'author',
    }));
  });
});