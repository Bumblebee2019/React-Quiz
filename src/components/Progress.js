import { createContext, useContext } from "react";
import { PostContext } from "./App";
import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  //(3) Consuming the context value. This is just a different way to destruture the
  //array. Another way to do this is in StartScreen.jsx
  const { numQuestions, index, answer, points, maxPossiblePoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
