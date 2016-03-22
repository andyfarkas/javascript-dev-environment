
import chai, { expect } from 'chai';
import fetchMock from 'fetch-mock';
import mockery from 'mockery';

describe('API middleware', () => {

  mockery.registerMock('isomorphic-fetch', fetchMock.fetchMock);

  before(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });

  afterEach(() => {
    fetchMock.restore();
  })

  after(() => {
    mockery.disable();
  });

  const apiMiddleware = require('./api.js').default;

  it('should invoke next() when no __api key found in action', () => {

    const next = chai.spy(() => {});
    const action = {
      type: 'NON_API_ACTION',
    }
    apiMiddleware()(next)(action);
    expect(next).to.have.been.called.with(action);

  });


  it('should dispatch REQUEST_* action before the actual request', () => {
    const next = chai.spy(() => {});
    const expectedRequestAction = {
      type: 'REQUEST_API_ACTION',
    }
    const action = {
      type: 'API_ACTION',
      __api: {

      }
    }
    apiMiddleware()(next)(action);
    expect(next).to.have.been.called.with(expectedRequestAction);
  });

  it('should send the request to provided path', (done) => {
    const next = () => {};
    const action = {
      type: 'API_ACTION',
      __api: {
        path: 'http://http-api-path',
        method: 'GET',
        headers: {
          field: 'value',
        }
      }
    }

    fetchMock.mock({
      matcher: 'http://http-api-path',
      method: 'GET',
      response: {},
    });

    apiMiddleware()(next)(action);

    try {
      expect(fetchMock.called('http://http-api-path')).to.be.true;
      expect(fetchMock.lastOptions('http://http-api-path').method).to.equal('GET');
      expect(fetchMock.lastOptions('http://http-api-path').headers).to.deep.equal({
        field: 'value',
      });
      done();
    } catch (e) {
      done(e);
    }

  });

  it('should send data as json body', (done) => {
    const next = () => {};
    const action = {
      type: 'API_ACTION',
      __api: {
        path: 'http://http-api-path',
        method: 'GET',
        data: {
          field: 'value',
        }
      }
    }

    fetchMock.mock({
      matcher: 'http://http-api-path',
      method: 'GET',
      response: {},
    });

    apiMiddleware()(next)(action);

    expect(fetchMock.called('http://http-api-path')).to.be.true;
    expect(fetchMock.lastOptions('http://http-api-path').body).to.equal(JSON.stringify({
      field: 'value',
    }));

    done();
  });

  it('should dispatch action with received data', async (done) => {
    let dispatchedActions = [];
    const next = (action) => { dispatchedActions.push(action) };
    const expectedResponseAction = {
      type: 'API_ACTION',
      result: 'ok',
    }

    const action = {
      type: 'API_ACTION',
      __api: {
        path: 'http://http-api-path',
        method: 'GET',
      }
    }

    fetchMock.mock({
      matcher: 'http://http-api-path',
      method: 'GET',
      response: {
        body: {
          result: 'ok',
        },
      }
    });

    await apiMiddleware()(next)(action);
    try {
      expect(dispatchedActions.pop()).to.be.deep.equal(expectedResponseAction);
      done();
    } catch (e) {
      done(e);
    }
  });

});
