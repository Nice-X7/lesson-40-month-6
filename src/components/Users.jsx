import React from "react";
import { useSelector } from "react-redux";
import { User } from "./User";

export const Users = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="menu_user">
      {users.map((item) => {
        return <User user={item} key={item.id} />;
      })}
    </div>
  );
};
