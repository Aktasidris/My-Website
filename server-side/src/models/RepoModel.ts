export interface SubProject {
    name: string;
    readme?: string;
    liveUrl?: string;
  }
  
  export interface RepoModel {
    name: string;
    description: string;
    repoUrl: string;
    techStack: string[];
    readme?: string;
    subProjects?: SubProject[];
  }
  