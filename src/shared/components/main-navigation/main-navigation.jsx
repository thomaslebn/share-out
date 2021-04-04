import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "../main-header/main-header";
import MainLinks from "../main-links/main-links";

import "./main-navigation.css";

const MainNavigation = () => (
  <MainHeader>
    <button className="main-navigation__menu-btn">
      <span />
      <span />
      <span />
    </button>
    <h1 className="main-navigation__title">
      <Link to="/"> Your Places </Link>
    </h1>
    <nav>
      <MainLinks />
    </nav>
  </MainHeader>
);

export default MainNavigation;
