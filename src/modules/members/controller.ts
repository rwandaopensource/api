import GithubMembers from '../../helpers/github.members';

export default class MembersController {
  static async viewMembers(req: any, res: any) {
    let { query: { page } } = req;
    page = parseInt(page, 10);
    const members = await GithubMembers.allMembers(page);
    res.status(200).json({
      members,
      page: page + 1,
    });
  }
}
