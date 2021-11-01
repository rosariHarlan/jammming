import "./SearchResults.scss";
import TrackList from "./TrackList";

const SearchResult = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={props.SearchResults}/>
    </div>
  );
};

export default SearchResult;