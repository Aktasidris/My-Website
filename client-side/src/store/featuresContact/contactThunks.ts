import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactFormData  } from "../../types/ContactModel";
import api from "../../services/api";
//canlıya alındığında url güncellenecek
export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (formData: ContactFormData, thunkAPI) => {
    try {
      const response = await api.post("/contact",formData);

      return response.data.message;
    } catch (error: any) {
      console.error("Veri çekme hatası:", error);
      return thunkAPI.rejectWithValue(error.response?.data?.error || "Hata oluştu");
    }
  }
);

