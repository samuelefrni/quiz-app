import React from "react";
import { IQuizProps } from "../../utils/Interface/interface";
import { Link } from "react-router-dom";
import QuizCSS from "./Quiz.module.css";
import Navbar from "../../components/Navbar/Navbar";
import image from "../../assets/3534910.jpg";

const Quiz: React.FC<IQuizProps> = ({
  question,
  answers,
  checkAnswer,
  userAnswer,
  questionNumber,
  totalQuestion,
  nextQuestion,
  preaviusQuestion,
  restartGame,
}) => {
  const isLastQuestion = questionNumber === totalQuestion;

  return (
    <>
      <Navbar preaviusQuestion={preaviusQuestion} restartGame={restartGame} />
      <div className={QuizCSS.container}>
        <img className={QuizCSS.image} src={image} alt="" />
        <p className={QuizCSS.questionNumber}>
          Question: {questionNumber}/{totalQuestion}
        </p>
        <p className={QuizCSS.question}>{question}</p>
        <div className={QuizCSS.answer}>
          {answers.map((answer) => (
            <span key={answer}>
              <button
                disabled={userAnswer !== undefined}
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
            <button disabled={!userAnswer}>
              {userAnswer ? (
                <Link to="/results">Results</Link>
              ) : (
                <span>Select the last answer</span>
              )}
            </button>
          ) : (
            <button disabled={!userAnswer} onClick={nextQuestion}>
              Next Question
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
