import "./SearchBar.scss";
import React, { useState, useEffect } from "react";

const SearchBar = (props) => {
  const userSearchTerm = () => String(window.localStorage.getItem('searchTerm') || '');
  const [searchTerm, setSearchTerm] = useState(userSearchTerm);

  useEffect(() => {
    window.localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  async function handleSearchTerm() {
    try {
      await props.searchSpotify(searchTerm);
    } catch (error) {
      console.log(error);
      const clientID = "3f2ade0c41544fd58b03533214d60ef1";
      const currentURL = "http://localhost:3000/";
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${currentURL}`;
    }
  }

  async function handleKeyPress(e) {
    if (e.key === 'Enter') {
      await handleSearchTerm();
    }
  }

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        value={searchTerm}
      />
      <button className="SearchButton" onClick={handleSearchTerm}>SEARCH</button>
    </div>
  );
};

export default SearchBar;
