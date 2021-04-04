import React from "react";

import UserItem from "../user-item/user-item";

import "./users-list.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2> No users found. </h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(({ ...otherUserProps }) => (
        <UserItem key={otherUserProps.id} {...otherUserProps} />
      ))}
    </ul>
  );
};

export default UsersList;
