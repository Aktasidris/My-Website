import { Request, Response, RequestHandler  } from 'express';
import { getUserRepos , getRepoDetails } from '../services/githubService';

export const fetchUserRepos = async (req: Request, res: Response) => {
  try {
    const repos = await getUserRepos();
    res.json(repos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch repositories' });
  }
};

export const fetchRepoDetails = async (req: Request, res: Response) => {
  try {
    const { repoName } = req.params;
    if (!repoName) {
       res.status(400).json({ message: 'Repository name is required.' });
       return;
    }
    const repo = await getRepoDetails(repoName);
    res.json(repo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch repository details.' });
  }
};
