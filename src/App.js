import "./App.scss";
import React, { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import Spotify_API from "./Spotify_API";

const App = () => {
  const [search, setSearch] = useState(null);
  const [spotifyToken,setSpotifyToken] = useState(null);
  const [playlistTracks, setPlaylistTracks] = useState(null);

  useEffect(() => {
    const spotifyTokenFromUrl = window.location.hash.split('&')[0].substr(14);
    setSpotifyToken(spotifyTokenFromUrl);
  }, [])

  async function searchSpotify(searchTerm) {
    const results = await Spotify_API.search(searchTerm, spotifyToken);
    setSearch(results);
  }

  async function createSpotifyPlaylist(name, trackIDs) {
    await Spotify_API.createPlaylist(name, trackIDs, spotifyToken);
    setPlaylistTracks([]);
  }

  const addTrack = (track) => {
    setPlaylistTracks(oldPlaylist => {
      if (oldPlaylist.includes(track)) {
        return oldPlaylist;
      } else {
        return [...oldPlaylist, track];
      }
    });
  }

  const removeTrack = (track) => {
    setPlaylistTracks(oldPlaylist => oldPlaylist.filter((x => track !== x)));
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar searchSpotify={searchSpotify} />
        <div className="App-playlist">
          <SearchResults tracks={search} onAdd={addTrack}/>
          <Playlist
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            createSpotifyPlaylist={createSpotifyPlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
