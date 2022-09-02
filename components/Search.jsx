import styled from "styled-components";
import SearchIcon from "../public/assets/SearchIcon";

const Search = () => {
  const Cont = styled.div`
    display: flex;
    align-items: center;
    gap:1.6rem;
    margin-top:1.6rem;
    padding:0 1.6rem;

    input {
      background: transparent;
      width:25rem;
    }

    input::placeholder {
      font-size:1.6rem;
      color:#aaa;
    }
  `;

  return (
    <Cont>
      <label htmlFor="search"><SearchIcon /></label>
      <input id="search" type="text" placeholder="Search for a movie or TV series" />
    </Cont>
  );
};

export default Search;
