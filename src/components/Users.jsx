import React from "react";
import { useSelector } from "react-redux";
import { User } from "./User";

export const Users = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <ul>
        {users.map((item) => {
          return <User user={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
