import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Album } from "./Album";
import { setChoseAlbume } from "../redux/action";
import { useParams } from "react-router-dom";

export const Albums = () => {
  const albums = useSelector((state) => state.albums.albumes);
  const filter = useSelector((state) => state.albums.filter);
  const id = parseInt(useParams().id);
  const filterAlbums = albums
    .filter((item) => item.userId === id)
    .filter((item) => item.title.indexOf(filter) > -1);
  const dispatch = useDispatch();

  console.log(isNaN(id));

  if (isNaN(id)) {
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
