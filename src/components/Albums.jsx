import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Album } from "./Album";
import { setChoseAlbume } from "../redux/action";

export const Albums = () => {
  const albums = useSelector((state) => state.albums.albumes);
  const selectUserId = useSelector((state) => state.users.selectedUserId);
  const filter = useSelector((state) => state.albums.filter);

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

  const handleChoseAlbum = (event) => {
    dispatch(setChoseAlbume(event.target.value));
  };

  return (
    <div className="albums">
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
