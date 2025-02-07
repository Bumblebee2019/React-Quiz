import { createContext, useContext } from "react";
import Options from "./Options";
import { PostContext } from "./App";

function Questions() {
  const { question, dispatch, answer } = useContext(PostContext);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
