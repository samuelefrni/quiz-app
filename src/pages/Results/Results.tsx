import React from "react";
import { IResultsProps } from "../../utils/Interface/interface";
import { Link } from "react-router-dom";
import ResultsCSS from "./Results.module.css";
import image from "../../assets/3534910.jpg";

const getScoreMessage = (score: number) => {
  if (score <= 3) return "Basic";
  if (score <= 7) return "Intermediate";
  if (score <= 9) return "Expert";
  if (score === 10) return "Master";
};

const Results: React.FC<IResultsProps> = ({ score, totalQuestion }) => {
  const scoreMessage = getScoreMessage(score);

  return (
    <>
      <div className={ResultsCSS.container}>
        <img src={image} alt="" />
        <span>{scoreMessage}</span>
        <h2>
          Your total score is: {score}/{totalQuestion}
        </h2>
        <button>
          <Link to="/">Try Again</Link>
        </button>
      </div>
    </>
  );
};

export default Results;
