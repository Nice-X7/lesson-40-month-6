import { useDispatch, useSelector } from "react-redux";
import { Albums } from "./Albums";
import { Users } from "./Users";
import { useEffect } from "react";
import { loadAlbums, loadUsers } from "../redux/action";
import ReactLoading from 'react-loading';
import { Routes, Route } from "react-router-dom";

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
    dispatch(loadAlbums())
  }, [])

  const loadingUsers = useSelector((state) => state.users.loadUsers)
  const loadingAlbums = useSelector((state) => state.albums.loadAlbums)

  if (loadingAlbums || loadingUsers) {
    return (
      <div className="loading">
        <ReactLoading type="bubbles" color="#000" width={200} height={200}/>
      </div>
    )
  }

  return (
    <div className="App">
      <Users />
      <Routes>
        <Route 
        path="/:id?"
        element={<Albums />}
        />
      </Routes>
    </div>
  );
}