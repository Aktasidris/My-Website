import { RepoModel } from "../../types/RepoModel";

export interface ProjectState {
  projects: RepoModel[];
  selectedProject: RepoModel | null;
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}