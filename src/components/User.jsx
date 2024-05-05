import React from "react";
import { Link } from "react-router-dom";

export const User = ({ user }) => {
  return (
    <Link to={`/${user.id}`}>
      <button className="user">
        <span className="userName">{user.name}</span>
        <br />
        <span>{user.email}</span>
      </button>
    </Link>
  );
};
