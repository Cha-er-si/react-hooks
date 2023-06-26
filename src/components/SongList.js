import React, { useState } from "react";
import { v1 as uuid } from "uuid";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Anti-Fragile", id: 1 },
    { title: "Pop", id: 2 },
    { title: "Go Up", id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: "New Song", id: uuid() }]);
  };

  return (
    <div className="sing-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a Song</button>
    </div>
  );
};

export default SongList;
