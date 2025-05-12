import axios from 'axios';
import dotenv from 'dotenv';
import { memoryCache } from '../utils/cache';
import { RepoModel, SubProject } from '../models/RepoModel';
import {matchLiveUrlsWithRepos} from './vercelService'
dotenv.config();

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const CACHE_TTL = Number(process.env.CACHE_TTL) || 10 * 60 * 1000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const githubHeaders = {
  Accept: 'application/vnd.github.mercy-preview+json', // topics için
  Authorization: process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : undefined,
};
//get data from githup for selected url
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

const getRepoList = async () => {
  try {
    const cacheKey = 'repoList';
    const cached = memoryCache.get<any[]>(cacheKey);
    if (cached) {
      console.log('get repo list :cacheden veri geldi')
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
      }))

    // 🔹 nergis-consultancy özel fetch repo name ile istek olduğu için topics içeriyor
    const nergisRepo = await fetchFromGitHub(`https://api.github.com/repos/${GITHUB_USERNAME}/nergis-consultancy`);

    if (nergisRepo ) {
      reposWithTopics.push({
        ...nergisRepo
      });
    }
    const reposwithurl=matchLiveUrlsWithRepos(reposBasic);//live url vercelden alınıp data ya eklendi
    //optimize çalışması için cache bellek kullanılır Apıye yeni istek göndermememk için
    memoryCache.set(cacheKey, reposwithurl, CACHE_TTL);
    console.log('get repolist: cache veri yüklendi ')
    return reposwithurl;
  }
  catch (error) {
    console.error("Error in getRepoList:", error);
    return [];
  }
};
//selected repos functions
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
  // Sadece React-mini için işlem yap
  const manualSubProjects = [
    'axios-api',
    'e-com',
    'formik-yup',
    'react-todo-app',
    'todo-app',
  ];

  const subProjects: SubProject[] = [];

  try {
    
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
            readme: content,
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error in getSubProjectsWithReadme for ${repoName}:`, error);
  }

  return subProjects;
};

//formatted data for all repos
export const getFormattedRepos = async (): Promise<RepoModel[]> => {
  try {
    const cacheKey = 'formattedRepos';
    const cached = memoryCache.get<RepoModel[]>(cacheKey);
    if (cached){
      console.log('get formatted repo cached: ver döndü')
      return cached;
    } 

    const repoList = await getRepoList();
    if (!Array.isArray(repoList)) throw new Error("repoList is not iterable");

    const results: RepoModel[] = [];

    for (const repo of repoList) {
      const [readme, subProjects] = await Promise.all([
        getRootReadme(repo.name),
        getSubProjectsWithReadme(repo.name),
      ]);

      results.push({
        name: repo.name,
        description: repo.description ?? '',
        repoUrl: repo.html_url,
        techStack: repo.topics || [],
        readme,
        subProjects,
      });
    }

    memoryCache.set(cacheKey, results, CACHE_TTL);
    return results;
  } catch (error) {
    console.error("Error in getFormattedRepos controller:", error);
    return [];
  }
};

export const getUserRepos = async () => {
  try {
    const repos = await getFormattedRepos();
    return repos.map(({ name, description, repoUrl }) => ({
      name,
      description,
      repoUrl,
    }));
  } catch (error) {
    console.error("Error in getUserRepos:", error);
    return [];
  }
};

export const getRepoDetails = async (repoName: string) => {
  try {
    const repos = await getFormattedRepos();
    return repos.find((repo) => repo.name === repoName);
  } catch (error) {
    console.error(`Error in getRepoDetails for ${repoName}:`, error);
    return null;
  }
};