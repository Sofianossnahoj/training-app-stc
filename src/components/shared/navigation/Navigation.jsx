import { Link, useLocation } from "react-router-dom";

import arrowIcon from "@/assets/icons/arrow-left.svg";
import hambugerIcon from "@/assets/icons/hamburger.svg";
import logo from "@/assets/icons/logo.svg";

import "./navigation.sass";

const Navigation = () => {
  const location = useLocation();
  const isStartPage = location.pathname === "/";

  return (
    <nav className="page-navigation">
      {!isStartPage && (
        <div className="link-wrapper">
          <Link to={"/"} aria-label="Go back to the home page">
            <img src={arrowIcon} alt="Arrow icon" />
          </Link>
        </div>
      )}
      <div className="image-wrapper">
        <img className="logo" src={logo} alt="Sport Training Club logo" />
      </div>
      <div className="menu-wrapper">
        <button className="button" aria-label="Menu">
          <img src={hambugerIcon} alt="menu icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
