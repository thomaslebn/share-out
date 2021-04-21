import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../../shared/components/UIElements/avatar/avatar";
import Card from "../../../shared/components/UIElements/card/card";

import "./user-item.css";

const UserItem = ({ id, name, image, places: { length } }) => (
  <li className="user-item">
    <Card className="user-item__content">
      <Link to={`/${id}/places`}>
        <div className="user-item__image">
          <Avatar
            image={`https://share-out-backend.herokuapp.com/${image}`}
            alt={name}
          />
        </div>
        <div className="user-item__info">
          <h2> {name} </h2>
          <h3>
            {length} {length === 1 ? "place" : "places"}
          </h3>
        </div>
      </Link>
    </Card>
  </li>
);

export default UserItem;
