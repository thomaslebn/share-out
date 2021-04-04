import React from "react";

import "./card.css";

const Card = (props) => (
  <div className={`card ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

export default Card;
