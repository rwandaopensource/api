import chai from 'chai';
import cache from '../cache';

const { expect } = chai;
describe('Test LRU cache for all base cases', () => {
  it('Test it with very big data', done => {
    expect(cache.set('test', ''.padStart(1024 * 1024 * 21, ' '))).to.eql(false);
    expect(cache.get('test')).to.eql(undefined);
    done();
  });
  it('Test it with storing undefined value', done => {
    expect(cache.set('test', undefined)).to.eql(false);
    expect(cache.get('test')).to.eql(undefined);
    done();
  });
  it('Test it with storing decent values in all forms', done => {
    expect(cache.set('test1', {})).to.eql(true);
    expect(cache.get('test1')).to.eql({});
    expect(cache.set('test2', [])).to.eql(true);
    expect(cache.get('test2')).to.eql([]);
    expect(cache.set('test2', 1.5)).to.eql(true); // TESTING OVERRIDING
    expect(cache.get('test2')).to.eql(1.5);
    expect(cache.set('test1', '')).to.eql(false);
    expect(cache.get('test1')).to.eql({});
    done();
  });
});
