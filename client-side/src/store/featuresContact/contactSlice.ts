import { createSlice } from "@reduxjs/toolkit";
import { ContactState } from "./contactTypes";
import { sendMessage } from "./contactThunks"; 
const initialState: ContactState = {
    successMessage: '',
    loading: "idle",
    error: null

};

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        clearMessages: (state) => {
            state.successMessage = '';
            state.error = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.loading = "loading";
                state.successMessage = '';
                state.error = '';
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.successMessage = action.payload;
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload as string;
            });
    }
});

export const { clearMessages } = contactSlice.actions;
export default contactSlice.reducer;