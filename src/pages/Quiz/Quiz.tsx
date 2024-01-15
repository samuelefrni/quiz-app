import React, { useEffect, useState } from "react";
import { circularEconomyQuiz } from "../../utils/Questions/question";
import { mixArray } from "../../utils/Functions/utils";
import { IQuizProps } from "../../utils/Interface/interface";
import { IGetQuestions } from "../../utils/Interface/interface";
import { IAnswerObject } from "../../utils/Interface/interface";
import { Link } from "react-router-dom";
import QuizCSS from "./Quiz.module.css";
import Navbar from "../../components/Navbar/Navbar";
import image from "../../assets/3534910.jpg";

const Quiz: React.FC<IQuizProps> = ({
  loading,
  number,
  questionNumber,
  totalQuestion,
  setNumber,
  setScore,
  score,
}): JSX.Element => {
  const [question, setQuestion] = useState<IGetQuestions[]>([]);
  const [userAnswers, setUserAnswers] = useState<IAnswerObject[]>([]);
  const [localScore, setLocalScore] = useState("");
  const isLastQuestion = questionNumber === totalQuestion;

  useEffect(() => {
    if (!loading) {
      setQuestion(mixArray(circularEconomyQuiz));
      setUserAnswers([]);

      setLocalScore(String(localStorage.getItem("quizScore")));
      setScore(0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quizScore", score.toString());
  }, [score]);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
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
  };

  const nextQuestion = (): void => {
    if (number < 9) {
      setNumber((prevState) => prevState + 1);
    }
  };

  const previousQuestion = (): void => {
    if (number + 1 > 1) {
      setNumber((prevState) => prevState - 1);
    }
  };

  const restartGame = (): void => {
    setScore(0);
    setNumber(0);
    setQuestion(mixArray(circularEconomyQuiz));
    setUserAnswers([]);
  };

  return (
    <>
      {!loading && question.length > 1 && (
        <div>
          <Navbar
            preaviusQuestion={previousQuestion}
            restartGame={restartGame}
          />
          <div className={QuizCSS.container}>
            <img src={image} alt="" />
            <div className={QuizCSS.containerScore}>
              <p className={QuizCSS.questionNumber}>
                Question: {questionNumber}/{totalQuestion}
              </p>
              <p className={QuizCSS.lastScore}>{`Last score: ${
                localScore == "" ? "0/10" : `${localScore}/10`
              }`}</p>
            </div>
            <p className={QuizCSS.question}>{question[number].question}</p>
            <div className={QuizCSS.answer}>
              {question[number].answers.map((answer) => (
                <span key={answer}>
                  <button
                    disabled={userAnswers[number] != undefined}
                    value={answer}
                    onClick={checkAnswer}
                  >
                    {answer}
                  </button>
                </span>
              ))}
            </div>
            <div className={QuizCSS.containerButton}>
              {isLastQuestion ? (
                <button disabled={!userAnswers[number]}>
                  {userAnswers[number] ? (
                    <Link to="/results">Results</Link>
                  ) : (
                    <span>Select the last answer</span>
                  )}
                </button>
              ) : (
                <button disabled={!userAnswers[number]} onClick={nextQuestion}>
                  Next Question
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
