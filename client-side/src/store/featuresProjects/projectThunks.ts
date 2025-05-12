import { createAsyncThunk } from "@reduxjs/toolkit";
import { RepoModel } from "../../types/RepoModel";
import api from "../../services/api";
//canlıya alındığında url güncellenecek
export const fetchProjects = createAsyncThunk<RepoModel[]>(
  "projects/fetchProjects",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/github/formatted");
      // console.log("Veri geldi:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Veri çekme hatası:", error);
      return thunkAPI.rejectWithValue(error.message);
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