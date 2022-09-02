import styled from "styled-components";

const StSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 1.6rem;
  padding: 0 1.6rem;

  input {
    background: transparent;
    width: 29rem;
    color: #fff;
    padding: 2rem 2rem 2rem 4rem;
    outline: none;
  }

  input::placeholder {
    font-size: 1.6rem;
    color: #aaa;
  }

  label {
    position: absolute;
  }
`;

export default StSearch;
