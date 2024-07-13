import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "./quizSlize";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore(
    {
        reducer: {
            quiz: quizReducer
        },
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({serializableCheck: false});
        }
    }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;