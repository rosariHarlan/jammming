import "./SearchResults.scss";
import "./TrackList.scss";
import Track from "./Track";

const SearchResult = (props) => {

  const { tracks, onAdd } = props;

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <div className="TrackList">
        {tracks.map((item) => (
          <Track 
            key={item.id}
            track={item}
            addTrack={onAdd}
            isRemoval={false}
          />
        ))}
        {/* {tracks !== undefined ? tracks.map((item) => (
          <Track 
            key={item.id}
            track={item}
            addTrack={onAdd}
            isRemoval={false}
          />
        )) : 
        (<div className="error">
            <h3>Sorry, we can't find what you're looking for &#128546;. Is there maybe a typo in your search query?</h3>
          </div>)
        } */}
      </div>
    </div>
  );
};

export default SearchResult;