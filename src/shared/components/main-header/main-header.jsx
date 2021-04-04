import React from "react";

import "./main-header.css";

const MainHeader = (props) => (
  <header className="main-header">{props.children}</header>
);

export default MainHeader;
