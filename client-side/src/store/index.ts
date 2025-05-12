import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './featuresProjects/projectSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import contactReducer from './featuresContact/contactSlice';
import appReducer from "./featuresApp/appSlice";
const store = configureStore({
  reducer: {
    projects: projectReducer,
    contact: contactReducer,
    app: appReducer,
  },
});

// RootState ve AppDispatch tiplerini çıkartıyoruz:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;