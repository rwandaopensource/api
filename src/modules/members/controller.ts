import GithubMembers from '../../helpers/github.members';

export default class MembersController {
  static async viewMembers(req: any, res: any) {
    const members = await GithubMembers.viewAllPublicMembers();
    res.status(200).json({
      members,
    });
  }
}
