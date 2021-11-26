import "./SearchResults.scss";
import "./TrackList.scss";
import Track from "./Track";

const SearchResult = (props) => {

  const { tracks, onAdd } = props;

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <div className="TrackList">
        {tracks && tracks.map((item) => (
          <Track 
            key={item.id}
            track={item}
            addTrack={onAdd}
            isRemoval={false}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;