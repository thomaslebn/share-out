import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "../main-header/main-header";
import MainLinks from "../main-links/main-links";
import SideDrawer from "../side-drawer/side-drawer";
import Backdrop from "../UIElements/backdrop/backdrop";

import "./main-navigation.css";

const MainNavigation = () => {
  const [drawerisOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => setDrawerIsOpen((prevProps) => !prevProps);

  return (
    <>
      {drawerisOpen && <Backdrop onClick={toggleDrawer} />}
      {drawerisOpen && (
        <SideDrawer onClick={toggleDrawer}>
          <nav className="main-navigation__drawer-nav">
            <MainLinks />
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={toggleDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/"> Share'Out </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <MainLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
