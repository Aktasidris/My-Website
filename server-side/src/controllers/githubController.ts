import { Request, Response } from 'express';
import * as githubService from '../services/githubService';

export const getAllUserRepos  = async (req: Request, res: Response) => {
  try {
    const repos = await githubService.getUserRepos();
    res.status(200).json(repos);
  } catch (error) {
    console.error('Error in getUserRepos controller:', error);
    res.status(500).json({ message: 'Failed to fetch user repositories.' });
  }
};
export const getRepoByName  = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const repo = await githubService.getRepoDetails(name);
    if (!repo) {
      res.status(404).json({ message: 'Repository not found.' });
    }
    res.status(200).json(repo);
  } catch (error) {
    console.error(`Error in getRepoDetails controller for ${name}:`, error);
    res.status(500).json({ message: 'Failed to fetch repository details.' });
  }
};
export const getAllFormattedRepos  = async (req: Request, res: Response) => {
  try {
    const formattedRepos = await githubService.getFormattedRepos();
    res.status(200).json(formattedRepos);
    // console.log(formattedRepos)
  } catch (error) {
    console.error('Error in getFormattedRepos controller:', error);
    res.status(500).json({ message: 'Failed to fetch formatted repositories.' });
  }
};