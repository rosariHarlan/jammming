import "./TrackList.scss";
import Track from "./Track";

const TrackList = (props) => {
  const { onAdd, onRemove, isRemoval, tracks } = props;
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return <Track track={track} key={track.id} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />;
      })}
      
    </div>
  );
};

export default TrackList;
