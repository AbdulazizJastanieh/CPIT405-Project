import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav">
      <Link to="/" id="homeButton">
        Home
      </Link>
      <Link to="/about-us" id="aboutButton">
        About
      </Link>
    </div>
  );
};

export default Nav;
