import React from "react";

import UserList from "../components/users-list/users-list";

const UsersPage = () => {
  const USERS = [
    {
      id: "u1",
      name: "Thomas",
      image: "https://avatars.githubusercontent.com/u/77930163?v=4",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default UsersPage;
