import React from "react";
import { IHomeProps } from "../../utils/Interface/interface";
import { Link } from "react-router-dom";
import HomeCSS from "./Home.module.css";
import image from "../../assets/3534910.jpg";

const Home: React.FC<IHomeProps> = (props) => {
  const { startGame } = props;

  return (
    <>
      <div className={HomeCSS.container}>
        <img src={image} alt="" />
        <h1>Quizzo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa
          omnis, quibusdam minima iusto placeat distinctio et dignissimos fugit.
          Distinctio ducimus maxime est recusandae earum tempora quisquam id
          voluptatibus soluta?
        </p>
        <button onClick={startGame}>
          <Link to="/quiz">Play</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
