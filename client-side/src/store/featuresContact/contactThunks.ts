import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactFormData } from "../../types/ContactModel";
import api from "../../services/api";
import { AxiosError } from "axios";
//canlıya alındığında url güncellenecek
export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (formData: ContactFormData, thunkAPI) => {
    try {
      const response = await api.post("/contact", formData);

      return response.data.message;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ error: string }>;
      console.error("Veri çekme hatası:", axiosError);
      return thunkAPI.rejectWithValue(axiosError.response?.data?.error || "Hata oluştu");
    }
  }
);

