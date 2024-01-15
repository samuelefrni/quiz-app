import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";

const App: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [number, setNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const startGame = (): void => {
    setNumber(0);
    setLoading(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home startGame={startGame} />} />
        {!loading && (
          <Route
            path="/quiz"
            element={
              <Quiz
                loading={loading}
                number={number}
                questionNumber={number + 1}
                totalQuestion={10}
                setNumber={setNumber}
                setScore={setScore}
                score={score}
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
};

export default App;
