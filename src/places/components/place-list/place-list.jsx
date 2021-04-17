import React from "react";

import Card from "../../../shared/components/UIElements/card/card";
import PlaceItem from "../place-item/place-item";

import Button from "../../../shared/components/FormElements/button";

import "./place-list.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2> No places found.</h2>
          <Button to="/places/new"> Share Place </Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(({ ...otherPlaceProps }) => (
        <PlaceItem key={otherPlaceProps.id} {...otherPlaceProps} />
      ))}
    </ul>
  );
};

export default PlaceList;
