import { createAsyncThunk } from "@reduxjs/toolkit";
import { TestimonialFormInput, TestimonialData } from "./testimonialTypes";

export const submitTestimonial = createAsyncThunk<TestimonialData, TestimonialFormInput>(
    "testimonials/submit",
    async (formData) => {
        // API yoksa bu şekilde simüle edebiliriz
        const enrichedData: TestimonialData = {
            ...formData,
            createddate: new Date().toISOString(),
            user: "/avatar3.png", // default avatar
        };

        // // backend olsaydı:
        // const response = await axios.post("/api/testimonials", enrichedData);
        // return response.data;

        return enrichedData;
    }
);
