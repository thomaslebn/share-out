import React from "react";

import Card from "../../../shared/components/UIElements/card/card";
import Button from "../../../shared/components/FormElements/button";

import "./place-item.css";

const PlaceItem = ({ id, imageUrl, title, address, description }) => (
  <li className="place-item">
    <Card className="place-item__content">
      <div className="place-item__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="place-item__info">
        <h2> {title} </h2>
        <h3> {address} </h3>
        <p> {description} </p>
      </div>
      <div className="place-item__actions">
        <Button inverse>VIEW ON MAP</Button>
        <Button to={`/places/${id}`}>EDIT</Button>
        <Button danger>DELETE</Button>
      </div>
    </Card>
  </li>
);

export default PlaceItem;
