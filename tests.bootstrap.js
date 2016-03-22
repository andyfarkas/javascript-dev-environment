import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import spies from 'chai-spies';
import 'babel-polyfill';
require('isomorphic-fetch');

chai.use(chaiImmutable);
chai.use(spies);