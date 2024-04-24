import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Album } from "./Album";
import { setChoseAlbume } from "../redux/action";

export const Albums = () => {
  const albums = useSelector((state) => state.albumes);
  const selectUserId = useSelector((state) => state.selectedUserId);
  const filter = useSelector((state) => state.filter);

  const filterAlbums = albums
    .filter((item) => item.userId === selectUserId)
    .filter((item) => item.title.indexOf(filter) > -1);
  const dispatch = useDispatch();

  if (selectUserId === null) {
    return (
      <div className="choseUser">
        <span>← Select user</span>
      </div>
    );
  }

  const handleChoseAlbum = (x) => {
    dispatch(setChoseAlbume(x.target.value));
  };

  return (
    <div className="todos">
      <input
        type="text"
        placeholder="Enter text to search for a case"
        className="search_line"
        value={filter}
        onChange={handleChoseAlbum}
      />
      <ul>
        {filterAlbums.map((item) => {
          return <Album album={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
