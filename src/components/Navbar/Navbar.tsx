import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import NavbarCSS from "./Navbar.module.css";
import image from "../../assets/3534910.jpg";
import { INavbarProps } from "../../utils/Interface/interface";
import { RiRestartLine } from "react-icons/ri";

const Navbar: React.FC<INavbarProps> = ({
  preaviusQuestion,
  restartGame,
}): JSX.Element => {
  return (
    <>
      <nav className={NavbarCSS.nav}>
        <img src={image} alt="" />
        <button onClick={preaviusQuestion}>
          <IoIosArrowRoundBack />
        </button>
        <h1>Quizzo</h1>
        <button onClick={restartGame}>
          <RiRestartLine />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
