import axios from 'axios';

/**
 * Github helper class, use for managing API called in github
 * @export default
 * @class GithubHelper
 */
export default class GithubMembers {
  /**
 * Get all members of Public members of Rwanda Open Source
 * return -1 when some error occured
 * @static
 * @returns {array} github user accounts
 * @memberof GithubMembers
 */
  static async viewAllPublicMembers(): Promise<number> {
    try {
      const URL = 'https://api.github.com/orgs/rwandaopensource/members';
      const response = await axios.get(URL);
      return response.data;
    } catch (err) {
      console.error(Date.now().toString(), err.message);
      return 0;
    }
  }
}
