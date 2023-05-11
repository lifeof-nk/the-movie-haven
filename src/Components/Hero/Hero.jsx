import React from "react";
// import hero from "../Images/wall.jpg";
import logo from "../Images/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero--section">
      <nav>
        <div className="left--nav">
          <img src={logo} alt="logo" height={50} width={70} />
          <h3>The Movie Haven</h3>
        </div>
        <div className="center--nav">
          <div className="search--bar">
            <SearchIcon className="search--icon" />
            <input type="text" placeholder="Enter your keywords..." />
          </div>
        </div>
        <div className="right--nav">
          <AccountCircleIcon />
          <h3>Login/Register</h3>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
