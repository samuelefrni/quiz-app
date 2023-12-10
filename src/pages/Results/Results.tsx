import React from "react";
import { IResultsProps } from "../../utils/Interface/interface";
import { Link } from "react-router-dom";
import ResultsCSS from "./Results.module.css";
import image from "../../assets/3534910.jpg";
import { scoreLevel } from "../../utils/Enum/enum";

const getScoreMessage = (score: number): JSX.Element | undefined => {
  if (score <= 3)
    return (
      <span>
        {scoreLevel.Basic}
        <br />
        😑
      </span>
    );
  if (score <= 7)
    return (
      <span>
        {scoreLevel.Intermediate}
        <br />
        😆
      </span>
    );
  if (score <= 9)
    return (
      <span>
        {scoreLevel.Expert}
        <br />
        😁
      </span>
    );
  if (score === 10)
    return (
      <span>
        {scoreLevel.Master}
        <br />
        😎
      </span>
    );
};

const Results: React.FC<IResultsProps> = ({
  score,
  totalQuestion,
}): JSX.Element => {
  const scoreMessage = getScoreMessage(score);

  return (
    <>
      <div className={ResultsCSS.container}>
        <img src={image} alt="" />
        {scoreMessage}
        <h2>
          Your total score is: {score}/{totalQuestion}
        </h2>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
    </>
  );
};

export default Results;
