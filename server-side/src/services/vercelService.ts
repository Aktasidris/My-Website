import axios from 'axios';
import dotenv from 'dotenv';
import { RepoModel, SubProject } from '../models/RepoModel';
import { VercelProject } from '../models/VercelModel';

dotenv.config();

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_API_URL = 'https://api.vercel.com/v6/projects';

const vercelHeaders = {
    Authorization: `Bearer ${VERCEL_TOKEN}`,
};

export const getVercelProjects = async (): Promise<VercelProject[]> => {
    try {
        const response = await axios.get(VERCEL_API_URL, { headers: vercelHeaders });
        const data = response.data.projects;

        return data.map((project: any) => ({
            name: project.name,
            latestDeploymentUrl: project.latestDeployments?.[0]?.url
                ? `https://${project.latestDeployments[0].url}`
                : undefined,
            gitRepo: project.link?.repo || undefined,
        }));
    } catch (error) {
        console.error('Vercel projects fetch error:', error);
        return [];
    }
};

export const matchLiveUrlsWithRepos = async (repos: RepoModel[]): Promise<RepoModel[]> => {
    const vercelProjects = await getVercelProjects();

    return repos.map(repo => {
        // Ana repo eşleşmesi
        const matchedMain = vercelProjects.find(v => v.name === repo.name);
        if (matchedMain && matchedMain.latestDeploymentUrl) {
            repo.subProjects = repo.subProjects?.map(sp => ({ ...sp })) || [];
            return {
                ...repo,
                subProjects: repo.subProjects,
                repoUrl: repo.repoUrl,
                techStack: repo.techStack,
                readme: repo.readme,
                name: repo.name,
                description: repo.description,
                liveUrl: matchedMain.latestDeploymentUrl,
            };
        }

        // Alt klasör eşleşmesi
        const updatedSubProjects = repo.subProjects?.map(sub => {
            const matchedSub = vercelProjects.find(v => v.name === sub.name);
            if (matchedSub && matchedSub.latestDeploymentUrl) {
                return {
                    ...sub,
                    liveUrl: matchedSub.latestDeploymentUrl,
                };
            }
            return sub;
        });

        return {
            ...repo,
            subProjects: updatedSubProjects,
        };
    });
};
