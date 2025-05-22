import { createAsyncThunk } from "@reduxjs/toolkit";
import { TestimonialFormInput, TestimonialData } from "./testimonialTypes";
import api from "../../services/api";
import { AxiosError } from "axios";

export const submitTestimonial = createAsyncThunk<TestimonialData, TestimonialFormInput>(
    "testimonials/submit",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post("/api/testimonials", formData);
            return response.data;
        } catch (err) {
            const error = err as AxiosError<{ message: string }>
            return rejectWithValue(error.response?.data?.message || "Yorum gönderilemedi.");
        }
    }
);

//fetch to db for get all testimonial list
export const fetchTestimonials = createAsyncThunk<
    TestimonialData[], // başarı durumunda dönecek veri tipi
    void,              // parametre gönderilmiyor
    { rejectValue: string }
>(
    "testimonials/fetchTestimonials",
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.get("/api/testimonials"); // örnek endpoint
            return res.data;
        } catch (err) {
            const error = err as AxiosError<{ message: string }>
            return rejectWithValue(error.response?.data?.message || "Yorumlar alınamadı.");
        }
    }
);