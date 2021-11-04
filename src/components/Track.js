import "./Track.scss";

const Track = (props) => {
  const { onAdd, track, onRemove, isRemoval } = props;

  const addToPlaylist = () => {
    onAdd(track);
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
      <div className="Track-information" key={track.id}>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
