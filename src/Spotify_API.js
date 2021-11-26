class Spotify_API {

  static async search(searchTerm, token) {
    const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const jsonResponse = await response.json();
    if (jsonResponse.tracks.items) {
      return jsonResponse.tracks.items.map(item => {
        return {
          id: item.id,
          title: item.name,
          artist: item.artists[0].name,
          album: item.album.name
        };
      });
    }
  }
  static async createPlaylist(name, trackIDs, token) {
    if (Array.isArray(trackIDs) && trackIDs.length) {
      const createPlaylistUrl = `https://api.spotify.com/v1/me/playlists`
      const response = await fetch(createPlaylistUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: name,
          public: true
        })
      });
      const jsonResponse = await response.json();
      const playlistID = jsonResponse.id;
      if (playlistID) {
        const replacePlaylistURL = `https://api.spotify.com/v1/playlist/${playlistID}/tracks`;
        await fetch(replacePlaylistURL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            uris: trackIDs.map(id => "spotify:track:".concat(id))
          })
        });
      }
    }
  }
}

export default Spotify_API;
