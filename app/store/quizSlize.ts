import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { QuizState } from "./store.types";

const initialState: QuizState = {
    error: null,
    isLoading: false,
    questions: []
};

export const quizSlice = createSlice(
    {
        name: "quiz",
        initialState,
        reducers: {
            loadQuestions(state) {
                state.isLoading = true;
            }
        }
    }
);

export const { loadQuestions } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;