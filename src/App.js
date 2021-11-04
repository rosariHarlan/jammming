import "./App.scss";
import React, { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";

const App = () => {
  const [search, setSearch] = useState([
    { name: "name1", artist: "artist1", album: "album1", id: 1 },
    { name: "name2", artist: "artist2", album: "album2", id: 2 },
    { name: "name3", artist: "artist3", album: "album3", id: 3 },
  ]);

  const [playlistName, setPlaylistName] = useState("My Playlist");

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "playlistName1",
      artist: "playlistArtist1",
      album: "plalylitsAlbum1",
      id: 4,
    },
    {
      name: "playlistName2",
      artist: "playlistArtist2",
      album: "playlistAlbum2",
      id: 5,
    },
    {
      name: "playlistName3",
      artist: "playlistArtist3",
      album: "playlistAlbum3",
      id: 6,
    },
  ]);
  useEffect(() => {
    setPlaylistName(playlistName, [playlistName]);
  }, [playlistName]);

  useEffect(() => {
    setPlaylistTracks(playlistTracks, [playlistTracks]);
  }, [playlistTracks]);

  useEffect(() => {
    setSearch(search, [search]);
  }, [search]);

  const addTrack = (track) => {
    let tracks = playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
      tracks.push(track);
      setPlaylistTracks([{ playlistTracks: tracks }]);
  };

  const removeTrack = (track) => {
    let tracks = playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    setPlaylistTracks([{ playlistTracks: tracks }]);
  }

  const updatePlaylistName = (name) => {
    setPlaylistName({ playlistName: name });
  }

  // const savePlaylist = () => {
  //   const trackURIs = playlistTracks.map(track => track.uri);
  // }

  const searchMusic = (term) => {
    console.log(term);
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={searchMusic} />
        <div className="App-playlist">
          <SearchResults searchResults={search} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            // onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
