import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import NavbarCSS from "./Navbar.module.css";
import image from "../../assets/3534910.jpg";
import { INavbarProps } from "../../utils/Interface/interface";
import { RiRestartLine } from "react-icons/ri";
import logo from "../../assets/comic-letter-q-in-shape-of-bright-violet-balloon-vector-19384535.png";
import { Link } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = ({
  preaviusQuestion,
  restartGame,
}): JSX.Element => {
  return (
    <>
      <Link to="/">
        <img className={NavbarCSS.logo} src={logo} alt="" />
      </Link>
      <nav className={NavbarCSS.nav}>
        <img src={image} alt="" />
        <button onClick={preaviusQuestion}>
          <IoIosArrowRoundBack />
        </button>
        <button onClick={restartGame}>
          <RiRestartLine />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
