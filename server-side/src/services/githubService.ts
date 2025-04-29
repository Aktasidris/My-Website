import axios from 'axios';
import dotenv from 'dotenv';
import { memoryCache } from '../utils/cache';

dotenv.config();
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const CACHE_TTL = Number(process.env.CACHE_TTL) || 10 * 60 * 1000;

export const getUserRepos = async () => {
    const cacheKey = 'userRepos';
    const cachedData = memoryCache.get<any[]>(cacheKey);
    if (cachedData) {
        return cachedData;
      }

  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    }); memoryCache.set(cacheKey, response.data, CACHE_TTL);
    return response.data;
  } catch (error) {
    console.error('GitHub repos fetch error:', error);
    throw new Error('Failed to fetch GitHub repositories.');
  }
};
export const getRepoDetails = async (repoName: string) => {
    const cacheKey = `repoDetails:${repoName}`;
    const cachedData = memoryCache.get<any>(cacheKey);
    if (cachedData) {
        return cachedData;
      }

    try {
      const response = await axios.get(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      memoryCache.set(cacheKey, response.data, CACHE_TTL);
      return response.data;
    } catch (error) {
      console.error(`GitHub repo detail fetch error: ${repoName}`, error);
      throw new Error('Failed to fetch GitHub repository details.');
    }
  };
  