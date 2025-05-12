import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "light" | "dark" | "sunset";

interface AppState {
    theme: ThemeType;
}

const getInitialTheme = (): ThemeType => {
    if (typeof window !== "undefined") {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark" || stored === "sunset") {
            return stored;
        }
    }
    return "sunset"; // default theme
};

const initialState: AppState = {
    theme: getInitialTheme(),
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.theme = action.payload;
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", action.payload);
                document.documentElement.setAttribute("data-theme", action.payload);
            }
        },
    },
});

export const { setTheme } = appSlice.actions;
export default appSlice.reducer;
