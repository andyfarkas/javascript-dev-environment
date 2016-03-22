
import createStore from './../../store.js';
import { expect } from 'chai';
import { Map } from 'immutable';
import reducers from './../index.js';

describe('FETCH_QUOTE action reducer', () => {
  it('should set quote from action as current quote', () => {

    const store = createStore();
    const action = {
      type: 'FETCH_QUOTE',
      quote: 'quote',
      author: 'author',
    };
    const nextState = reducers(Map({}), action);

    expect(nextState.get('quote')).to.equal(Map({
      quote: 'quote',
      author: 'author',
    }));

  });
});