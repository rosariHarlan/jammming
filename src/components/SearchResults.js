import "./SearchResults.scss";
import TrackList from "./TrackList";

const SearchResult = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd}/>
    </div>
  );
};

export default SearchResult;