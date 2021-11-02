import "./TrackList.scss";
import Track from "./Track";

const TrackList = (props) => {
  return (
    <div className="TrackList">
      {props.tracks.map((item) => {
        return <Track name={item.name} key={item.id} artist={item.artist} album={item.album} onAdd={props.onAdd}/>;
      })}
    </div>
  );
};

export default TrackList;
