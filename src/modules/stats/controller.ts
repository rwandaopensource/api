import GithubStat from '../../helpers/github.stats';

export default class GithubController {
  static async homeStats(req: any, res: any) {
    const members = await GithubStat.numberOfMembers();
    const repos = await GithubStat.numberOfRepositories();
    const teams = await GithubStat.numberOfTeams();
    const projects = await GithubStat.numberOfProjects();
    res.status(200).json({
      repos, members, teams, projects,
    });
  }
}
