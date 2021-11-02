import "./App.scss";
import React, { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";

const App = (props) => {
  const [search, setSearch] = useState([
    { name: "name1", artist: "artist1", album: "album1", id: 1 },
    { name: "name2", artist: "artist2", album: "album2", id: 2 },
    { name: "name3", artist: "artist3", album: "album3", id: 3 },
  ]);

  const [playlistName, setPlaylistName] = useState(["playlist1", "playlist2", "playlist3"]);

  const [playlistTracks, setPlaylistTracks] = useState([
    { name: "name1", artist: "artist1", album: "album1", id: 1 },
    { name: "name2", artist: "artist2", album: "album2", id: 2 },
    { name: "name3", artist: "artist3", album: "album3", id: 3 },
  ]);

  useEffect(() => {
    setSearch(search, [search]);
    setPlaylistName(playlistName, [playlistName]);
    setPlaylistTracks(playlistTracks, [playlistTracks]);
  }, []);

  const addTrack = (track) => {
    let tracks = playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === 1)) {
      return;
    }
    
    tracks.push(track);
    setPlaylistTracks({playlistTracks: tracks});
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={search} onAdd={addTrack()}/>
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
};

export default App;
