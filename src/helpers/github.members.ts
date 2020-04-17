import axios from 'axios';
import { baseHeaders } from './github.stats';
import cache from './cache';

/**
 * Github helper class, use for managing API called in github
 * @export default
 * @class GithubHelper
 */
export default class GithubMembers {
/**
 * Get all members of Public members of Rwanda Open Source
 * return empty array when some error occured
 * @static viewAllMembers
 * @returns {array} github user accounts
 * @memberof GithubMembers
 */
  static async allMembers(page: number): Promise<Array<any>> {
    try {
      if (cache.has(`MEMBERS_PAGE_${page}`)) {
        return cache.get(`MEMBERS_PAGE_${page}`);
      }
      const URL = `https://api.github.com/orgs/rwandaopensource/members?page=${page}&per_page=12`;
      let { data } = await axios.get(URL, {
        headers: baseHeaders,
      });
      for (const i in data) {
        data[i] = await GithubMembers.member(data[i].login);
      }
      data = data.filter((element: any) => element);
      cache.set(`MEMBERS_PAGE_${page}`, data);
      return data;
    } catch (err) {
      console.error(Date.now().toString(), err.message);
      return [];
    }
  }

  /**
 * Get single member details by username
 * return undefined when some error occured
 * @static
 * @returns Object github user profile
 * @memberof GithubMembers
 */
  static async member(username: string): Promise<any> {
    try {
      const URL = `https://api.github.com/users/${username}`;
      const response = await axios.get(URL, {
        headers: baseHeaders,
      });
      return response.data;
    } catch (err) {
      console.error(Date.now().toString(), err.message);
      return undefined;
    }
  }
}
