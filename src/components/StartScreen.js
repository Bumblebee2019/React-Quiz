import { useContext } from "react";
import { PostContext } from "./App";
import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  //(3) Consuming the context value. This is done without destructuring. A different way to
  //do this is in Progress.jsx
  const x = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{x.numQuestions} questions to test your React mystery</h3>
      <button
        className="btn btn-ui"
        onClick={() => x.dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
