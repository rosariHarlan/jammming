import "./Track.scss";

const Track = (props) => {
  const { addTrack, track, isRemoval, onRemove } = props;

  const addToPlaylist = () => {
    addTrack(track);
  };

  const removeFromPlaylist = () => {
    onRemove(track);
  };

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="Track-action" onClick={removeFromPlaylist}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={addToPlaylist}>
          +
        </button>
      );
    }
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.title}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
