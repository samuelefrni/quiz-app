import React from "react";
import { IResultsProps } from "../../utils/Interface/interface";
import { Link } from "react-router-dom";

const getScoreMessage = (score: number) => {
  if (score <= 3) return "Base";
  if (score <= 7) return "Intermedio";
  if (score <= 9) return "Esperto";
  if (score === 10) return "Maestro";
};

const Results: React.FC<IResultsProps> = ({ score, totalQuestion }) => {
  const scoreMessage = getScoreMessage(score);

  return (
    <>
      {scoreMessage}
      <h2>
        Your total score is: {score}/{totalQuestion}
      </h2>
      <button>
        <Link to="/">Return</Link>
      </button>
    </>
  );
};

export default Results;
