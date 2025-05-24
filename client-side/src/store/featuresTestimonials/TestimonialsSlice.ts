import { createSlice } from "@reduxjs/toolkit";
import { TestimonialState } from "./testimonialTypes";
import { fetchTestimonials, submitTestimonial } from "./testimonialsThunks";

const initialState: TestimonialState = {
    data: [],
    list: [],
    loading: false,
    error: null,
    success: false,
};

const testimonialSlice = createSlice({
    name: "testimonials",
    initialState,
    reducers: {
        resetSuccess(state) {
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitTestimonial.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(submitTestimonial.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.data.unshift(action.payload); // en yeni yorum üstte
            })
            .addCase(submitTestimonial.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Bir hata oluştu";
            }).addCase(fetchTestimonials.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTestimonials.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchTestimonials.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });

    },
});

export const { resetSuccess } = testimonialSlice.actions;
export default testimonialSlice.reducer;
