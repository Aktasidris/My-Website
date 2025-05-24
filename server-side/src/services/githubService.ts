import axios from 'axios';
import dotenv from 'dotenv';
import { memoryCache } from '../utils/cache';
import {  RepoModel, SubProject } from '../types/RepoModel';
import { matchLiveUrlsWithRepos, matchLiveUrlsWithSingleRepo } from './vercelService';

dotenv.config();

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const CACHE_TTL = Number(process.env.CACHE_TTL) || 10 * 60 * 1000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const githubHeaders = {
  Accept: 'application/vnd.github.mercy-preview+json', // for topics
  Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : undefined,
};

const fetchFromGitHub = async (url: string, acceptRaw = false) => {
  try {
    const res = await axios.get(url, {
      headers: {
        Accept: acceptRaw ? 'application/vnd.github.v3.raw' : githubHeaders.Accept,
        Authorization: githubHeaders.Authorization,
      },
    });
    return res.data;
  } catch (error: any) {
    console.error(`GitHub fetch error for ${url}:`, error.response?.data || error.message);
    return null;
  }
};

const getRepoList = async (): Promise<any[]> => {
  try {
    const cacheKey = 'repoList';
    const cached = memoryCache.get<any[]>(cacheKey);
    if (cached) {
      console.log('getRepoList: cache hit');
      return cached;
    }

    const reposBasic = await fetchFromGitHub(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    if (!reposBasic) return [];

    const reposWithTopics = await Promise.all(
      reposBasic.map(async (repo: any) => {
        const full = await fetchFromGitHub(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}`);
        return {
          ...repo,
          topics: full?.topics || [],
        };
      })
    );

    const nergisRepo = await fetchFromGitHub(`https://api.github.com/repos/${GITHUB_USERNAME}/nergis-consultancy`);
    if (nergisRepo) {
      reposWithTopics.push({ ...nergisRepo });
    }

    const reposWithLiveUrls = await matchLiveUrlsWithRepos(reposWithTopics);
    memoryCache.set(cacheKey, reposWithLiveUrls, CACHE_TTL);
    console.log('getRepoList: fetched and cached');
    return reposWithLiveUrls;
  } catch (error) {
    console.error('Error in getRepoList:', error);
    return [];
  }
};

const getRootReadme = async (repoName: string): Promise<string | undefined> => {
  try {
    const res = await fetchFromGitHub(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`
    );
    if (res?.content) {
      return Buffer.from(res.content, 'base64').toString('utf-8');
    }
  } catch (error) {
    console.error(`Error fetching root README for ${repoName}:`, error);
  }
  return undefined;
};

const getSubProjectsWithReadme = async (repoName: string): Promise<SubProject[]> => {
  const manualSubProjects = [
    'axios-api',
    'e-com',
    'formik-yup',
    'react-todo-app',
    'todo-app',
  ];

  const subProjects: SubProject[] = [];

  if (repoName !== 'React-mini') return [];

  for (const folderName of manualSubProjects) {
    const readmePath = `React-mini/${folderName}/README.md`;
    const readmeData = await fetchFromGitHub(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents/${readmePath}`
    );

    if (readmeData?.content) {
      const content = Buffer.from(readmeData.content, 'base64').toString('utf-8');
      if (content.trim()) {
        subProjects.push({
          name: folderName,
          folderPath: `React-mini/${folderName}`,
          readme: content,
        });
      }
    }
  }

  return subProjects;
};

export const getFormattedRepos = async (): Promise<RepoModel[]> => {
  try {
    const cacheKey = 'formattedRepos';
    const cached = memoryCache.get<RepoModel[]>(cacheKey);
    if (cached) {
      console.log('getFormattedRepos: cache hit');
      return cached;
    }

    const repoList = await getRepoList();
    if (!Array.isArray(repoList)) throw new Error('repoList is not iterable');

    const results: RepoModel[] = await Promise.all(
      repoList.map(async (repo: any) => {
        const [readme, subProjects] = await Promise.all([
          getRootReadme(repo.name),
          getSubProjectsWithReadme(repo.name),
        ]);

        return {
          name: repo.name,
          description: repo.description ?? '',
          repoUrl: repo.html_url,
          techStack: repo.topics || [],
          readme,
          subProjects,
          liveUrl: repo.liveUrl,
        };
      })
    );

    memoryCache.set(cacheKey, results, CACHE_TTL);
    return results;
  } catch (error) {
    console.error('Error in getFormattedRepos:', error);
    return [];
  }
};

export const getUserRepos = async () => {
  try {
    const repos = await getRepoList();
    return repos.map(({ name, description,topics  }: any) => ({
      name,
      description,
      techStack: topics,
    }));
  } catch (error) {
    console.error('Error in getUserRepos:', error);
    return [];
  }
};

export const getRepoDetails = async (repoName: string) => {
  try {
    const repos = await getFormattedRepos();
    const matched = repos.find((repo) => repo.name === repoName);
    if (!matched) return null;

    const enriched = await matchLiveUrlsWithSingleRepo(matched);
    return enriched;
  } catch (error) {
    console.error(`Error in getRepoDetails for ${repoName}:`, error);
    return null;
  }
};