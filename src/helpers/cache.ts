import LRUCache from 'lru-cache';

/**
 *cache class used for faster loading of the API
 * @class Cache
 * @extends {LRUCache<string, string>}
 */
class Cache extends LRUCache<string, string> {
  /**
   * set new key value pair, overwriting the existing one.
   * @param {string} key
   * @param {*} value
   * @returns {boolean}
   * @memberof Cache
   */
  set(key: string, value: any): boolean {
    if (value) {
      return super.set(key, JSON.stringify(value));
    }
    return false;
  }

  /**
   * get the value of the key, return undefined if the key is not found
   * @param {string} key
   * @returns {*}
   * @memberof Cache
   */
  get(key: string): any {
    const value = super.get(key);
    if (value) {
      return JSON.parse(value);
    }
    return undefined;
  }
}

export default new Cache({
  maxAge: 24 * 60 * 60 * 1000, // elements should last for one day,
  stale: true, // expired keys should be returned before being deleted
  updateAgeOnGet: false, // avoid updating the max age of an element when expired
  max: 1024 * 1024 * 10, // memory leaks is a big deal 😞😞😞, this should not exceed 10mbs
  length: (value: string): number => value.length,
});
