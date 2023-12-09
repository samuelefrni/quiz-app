import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import NavbarCSS from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className={NavbarCSS.nav}>
        <span>
          <IoIosArrowRoundBack />
        </span>
        <h1>Quizzo</h1>
        <span>
          <IoIosArrowRoundBack />
        </span>
      </nav>
    </>
  );
};

export default Navbar;
