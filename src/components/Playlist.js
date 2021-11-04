import "./Playlist.scss";
import TrackList from "./TrackList";

const Playlist = (props) => {

  const { playlistTracks, onRemove, onNameChange, onSave } = props;

  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={handleNameChange}/>
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;