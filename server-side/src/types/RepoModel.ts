export interface SubProject {
  name: string;
  folderPath: string;
  readme?: string;
  liveUrl?: string; // 👈 Vercel'den gelen live link
}

export interface RepoModelBasic {
  name: string;
  description: string;
  techStack: string[];
}

export interface RepoModelDetails {
  name: string;
  readme?: string;
  subProjects?: SubProject[];
  liveUrl?: string; // 👈 Ana projenin Vercel linki
}

export interface RepoModel extends RepoModelBasic, RepoModelDetails { }
