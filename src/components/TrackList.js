import "./TrackList.scss";
import Track from "./Track";

const TrackList = (props) => {
  return (
    <div className="TrackList">
      {props.tracks.map((track) => {
        return <Track track={track} key={track.id} />;
      })}
    </div>
  );
};

export default TrackList;
