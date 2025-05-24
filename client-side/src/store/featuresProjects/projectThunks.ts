import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";
import { LightRepoModel, RepoModel } from "./projectTypes";
//canlıya alındığında url güncellenecek
export const fetchProjects = createAsyncThunk<LightRepoModel[]>(
  "projects/fetchProjects",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/github/repos");
       console.log("Veri geldi:", response.data);
      return response.data;
    } catch (error) {
      const err = error as Error;
      console.error("Veri çekme hatası:", err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
// Belirli bir projeyi adıyla getirir
export const fetchProjectByName = createAsyncThunk<RepoModel, string>(
  "projects/fetchProjectByName",
  async (repoName) => {
    const response = await api.get<RepoModel>(`/github/repos/${repoName}`);
    return response.data;
  }
);