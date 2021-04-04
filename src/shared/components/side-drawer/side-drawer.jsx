import React from "react";
import ReactDOM from "react-dom";

import "./side-drawer.css";

const SideDrawer = (props) => {
  const content = (
    <aside className="side-drawer" onClick={props.onClick}>
      {props.children}
    </aside>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
