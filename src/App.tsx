import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import { quizQuestions } from "./utils/Questions/question";
import { mixArray } from "./utils/Functions/utils";
import { IGetQuestions } from "./utils/Interface/interface";
import { IAnswerObject } from "./utils/Interface/interface";
import Results from "./pages/Results/Results";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [question, setQuestion] = useState<IGetQuestions[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<IAnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);

  const startGame = (): void => {
    setQuestion(mixArray(quizQuestions));
    setUserAnswers([]);
    setScore(0);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading) {
      const answer = e.currentTarget.value;
      const correct = question[number].correct_answer === answer;
      if (correct) {
        setScore((prevState) => prevState + 1);
      }
      const answerObject: IAnswerObject = {
        question: question[number].question,
        answer: answer,
        isCorrect: correct,
        correct_answer: question[number].correct_answer,
      };
      setUserAnswers((prevState) => [...prevState, answerObject]);
    }
  };

  const nextQuestion = (): void => {
    if (number < 9) {
      setNumber((prevState) => prevState + 1);
    }
  };

  const preaviusQuestion = (): void => {
    if (number + 1 > 1) {
      setNumber((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home startGame={startGame} />} />
        {!loading && question.length > 1 && (
          <Route
            path="/quiz"
            element={
              <Quiz
                questionNumber={number + 1}
                totalQuestion={10}
                question={question[number].question}
                answers={question[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                checkAnswer={checkAnswer}
                nextQuestion={nextQuestion}
                preaviusQuestion={preaviusQuestion}
              />
            }
          />
        )}
        <Route
          path="/results"
          element={<Results score={score} totalQuestion={10} />}
        />
      </Routes>
    </>
  );
}

export default App;
