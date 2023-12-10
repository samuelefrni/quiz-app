import React from "react";
import { IHomeProps } from "../../utils/Interface/interface";
import { Link } from "react-router-dom";
import HomeCSS from "./Home.module.css";
import image from "../../assets/3534910.jpg";

const Home: React.FC<IHomeProps> = (props): JSX.Element => {
  const { startGame } = props;

  return (
    <>
      <div className={HomeCSS.container}>
        <img src={image} alt="" />
        <h1>Quizzo</h1>
        <p>
          Test yourself by taking a quiz with 10 questions related to the
          circular economy and recycling topic. At the end of the quiz you will
          get a score, this can be Basic, Intermediate, Expert or Master, how
          good do you think you are?
        </p>
        <button onClick={startGame}>
          <Link to="/quiz">Play</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
