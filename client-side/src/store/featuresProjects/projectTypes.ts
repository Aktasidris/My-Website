
export interface SubProject {
  name: string;
  readme?: string;
  liveUrl?: string;
}

export interface RepoModel extends LightRepoModel {
  readme?: string;
  subProjects?: SubProject[];
  repoUrl: string;
}
export interface LightRepoModel {
  name: string;
  description: string;
  techStack: string[];//fitreleme için

}
export interface ProjectState {
  projects: LightRepoModel[];
  selectedProject: RepoModel|null;
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}