import { createSlice } from "@reduxjs/toolkit";
import { ProjectState } from "./projectTypes";
import { fetchProjects, fetchProjectByName } from "./projectThunks";

const initialState: ProjectState = {
  projects: [],
  selectedProject:null,
  loading: "idle",
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setSelectedProject(state, action) {
      state.selectedProject = action.payload;
    }, clearSelectedProject(state) {
      state.selectedProject = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message ?? "Bir hata oluştu.";
      })

      .addCase(fetchProjectByName.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchProjectByName.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.selectedProject = action.payload;
      })
      .addCase(fetchProjectByName.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message ?? "Bir hata oluştu.";
      });
  },
});

export const { setSelectedProject, clearSelectedProject } = projectSlice.actions;
export default projectSlice.reducer;
