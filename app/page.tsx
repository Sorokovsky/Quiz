'use client'
import styles from "@styles/index.module.sass";
import { useAppDispatch, useAppSelector } from "@store/store";
import React, { useCallback } from "react";
import { loadQuestions } from "@store/quizSlize";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.quiz);
  const load = useCallback((event:React.MouseEvent) => {
    dispatch(loadQuestions())
  }, [isLoading]);
  return (
    <main>
      {isLoading ? "loading" : "not loading"}
      <button onClick={load}>Load</button>
    </main>
  );
}
export default Home;