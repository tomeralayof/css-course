import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img className="header__logo" src="../images/logo-white.png" alt="" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">outdoors</span>
          <span className="heading-primary--sub">is where life happand</span>
        </h1>
        <Link className="btn btn--white" to="#">
          discover our tours
        </Link>
      </div>
    </div>
  );
};

export default Header;
