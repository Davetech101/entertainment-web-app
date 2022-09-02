import { useState } from "react";
import SearchIcon from "../public/assets/SearchIcon";
import StSearch from "../styles/stComponents/StSearch";

const Search = ({ getValue }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    getValue(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <StSearch>
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search for a movie or TV series"
        onChange={onChange}
        value={search}
      />
    </StSearch>
  );
};

export default Search;
