import "./Playlist.scss";
import Track from "./Track";
import React, { useState, useEffect } from "react";

const Playlist = (props) => {
  const [playlistName, setPlaylistName] = useState("My Playlist");

  useEffect(() => {
    setPlaylistName(playlistName, [playlistName]);
  }, [playlistName]);

  const { playlistTracks, onRemove, createSpotifyPlaylist } = props;

  async function handleSavePlaylist() {
    const trackIDs = playlistTracks.map(x => x.id);
    createSpotifyPlaylist(playlistName, trackIDs);
  }

  return (
    <div className="Playlist">
      <input onChange={e => setPlaylistName(e.target.value)} placeholder={playlistName} />
      <div className="TrackList">
        {playlistTracks && playlistTracks.map((item) => (
          <Track 
            key={item.id}
            track={item}
            onRemove={onRemove}
            isRemoval={true}
          />)
        )}
      </div>
      <button className="Playlist-save" onClick={handleSavePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
