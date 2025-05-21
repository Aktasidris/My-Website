import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "light" | "dark" | "sunset";
export type LangType = "tr" | "en"
interface AppState {
    theme: ThemeType;
    lang: LangType;
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
const getInitialLang = (): LangType => {
    if (typeof window !== "undefined") {
        const storedLang = localStorage.getItem("lang") as LangType | null;
        if (storedLang === "tr" || storedLang === "en") {
            return storedLang;
        }
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === "tr" || browserLang === "en") {
            return browserLang;
        }
    }
    return "tr"; // default fallback
};

const initialState: AppState = {
    theme: getInitialTheme(),
    lang: getInitialLang(),
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
        }, setLang: (state, action: PayloadAction<LangType>) => {
            state.lang = action.payload;
            localStorage.setItem("lang", action.payload);
        }
    },
});

export const { setTheme, setLang } = appSlice.actions;
export default appSlice.reducer;
