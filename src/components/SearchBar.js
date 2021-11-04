import "./SearchBar.scss";

const SearchBar = (props) => {

  // const { onSearch, searchTerm } = props;

  // const search = () => {
  //   onSearch(searchTerm);
  // };
  
  // const handleTermChange = (e) => {
  //   setSearchTerm({ term: e.target.value })
  // }
  
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
};

export default SearchBar;
