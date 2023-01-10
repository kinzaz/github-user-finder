import { GithubError, GitHubUser } from 'types';

export const isGithubUser = (
	user: GitHubUser | GithubError
): user is GitHubUser => {
	return 'id' in user;
};
