import "./navigation.sass";

import arrowIcon from "@/assets/icons/arrow-left.svg";
import hambugerIcon from "@/assets/icons/hamburger.svg";
import logo from "@/assets/icons/logo.svg";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="page-navigation">
      <Link to={"/"} aria-label="Go back to the home page">
        <img src={arrowIcon} alt="Arrow icon" />
      </Link>
      <img src={logo} alt="Sport Training Club logo" />
      <button className="button" aria-label="Menu">
        <img src={hambugerIcon} alt="menu icon" />
      </button>
    </nav>
  );
};

export default Navigation;
