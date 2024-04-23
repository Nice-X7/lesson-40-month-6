import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "./Todo";
import { setChoseTodo } from "../redux/action";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const selectUserId = useSelector((state) => state.selectedUserId);
  const filter = useSelector((state) => state.filter);

  const filterTodos = todos
    .filter((todo) => todo.userId === selectUserId)
    .filter((todo) => todo.title.indexOf(filter) > -1);
  const dispatch = useDispatch();

  if (selectUserId === null) {
    return (
      <div className="choseUser">
        <span>← Select user</span>
      </div>
    );
  }

  const handleChoseTodo = (x) => {
    dispatch(setChoseTodo(x.target.value));
  };

  return (
    <div className="todos">
      <input
        type="text"
        placeholder="Enter text to search for a case"
        className="search_line"
        value={filter}
        onChange={handleChoseTodo}
      />
      <ul>
        {filterTodos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
};
