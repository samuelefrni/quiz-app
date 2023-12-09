import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import NavbarCSS from "./Navbar.module.css";
import image from "../../assets/3534910.jpg";
import { INavbarProps } from "../../utils/Interface/interface";

const Navbar: React.FC<INavbarProps> = ({ nextQuestion, preaviusQuestion }) => {
  return (
    <>
      <nav className={NavbarCSS.nav}>
        <img src={image} alt="" />
        <button onClick={preaviusQuestion}>
          <IoIosArrowRoundBack />
        </button>
        <h1>Quizzo</h1>
        <button onClick={nextQuestion}>
          <IoIosArrowRoundBack />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
