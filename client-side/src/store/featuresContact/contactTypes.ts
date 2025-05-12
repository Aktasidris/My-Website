export interface ContactState {
  successMessage: string;
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}