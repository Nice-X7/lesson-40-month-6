import { useDispatch, useSelector } from "react-redux";
import { Todos } from "./Todos";
import { Users } from "./Users";
import { useEffect } from "react";
import { loadTodos, loadUsers } from "../redux/action";
import ReactLoading from 'react-loading';

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
    dispatch(loadTodos())
  }, [])

  const loadingUsers = useSelector((state) => state.loadUsers)
  const loadingTodos = useSelector(state => state.loadTodos)

  if (loadingTodos || loadingUsers) {
    return (
      <div className="loading">
        <ReactLoading type="bubbles" color="#000" width={200} height={200}/>
      </div>
    )
  }

  return (
    <div className="App">
      <Users />
      <Todos />
    </div>
  );
}