import chai from 'chai';
import Cache from './cache';

const { expect } = chai;
describe('Test LRU cache for all base cases', () => {
  it('Test it with very big data', done => {
    expect(Cache.set('test', ''.padStart(1024 * 1024 * 11, ' '))).to.eql(false);
    expect(Cache.get('test')).to.eql(undefined);
    done();
  });
  it('Test it with storing undefined value', done => {
    expect(Cache.set('test', undefined)).to.eql(false);
    expect(Cache.get('test')).to.eql(undefined);
    done();
  });
  it('Test it with storing decent values in all forms', done => {
    expect(Cache.set('test1', {})).to.eql(true);
    expect(Cache.get('test1')).to.eql({});
    expect(Cache.set('test2', [])).to.eql(true);
    expect(Cache.get('test2')).to.eql([]);
    expect(Cache.set('test2', 1.5)).to.eql(true); // TESTING OVERRIDING
    expect(Cache.get('test2')).to.eql(1.5);
    expect(Cache.set('test1', '')).to.eql(false);
    expect(Cache.get('test1')).to.eql({});
    done();
  });
});
