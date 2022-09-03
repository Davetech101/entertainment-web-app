import { useState, useEffect } from "react";
import SearchIcon from "../public/assets/SearchIcon";
import StSearch from "../styles/stComponents/StSearch";

const Search = ({ getValue, type }) => {
  const [search, setSearch] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const onChange = (e) => {
    getValue(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    switch (type) {
      case "movies":
        setPlaceholder("Search for movies");
        break;
  
      default:
        setPlaceholder("Search for a movie or TV series");
    }
  }, [type])
  

  return (
    <StSearch>
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={search}
      />
    </StSearch>
  );
};

export default Search;
