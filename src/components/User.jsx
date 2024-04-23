import React from "react";
import { useDispatch } from "react-redux";
import { selectUser } from "../redux/action";

export const User = ({ user }) => {
  const dispatch = useDispatch();
  const selectUserId = () => {
    dispatch(selectUser(user.id));
  };

  return (
    <div className="user">
      <li onClick={selectUserId}>
        <span className="userName">{user.name}</span>
        <br />
        <span>{user.email}</span>
      </li>
    </div>
  );
};
