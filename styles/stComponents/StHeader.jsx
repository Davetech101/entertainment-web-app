import styled from "styled-components";

const StHeader = styled.header`
  background: #161d2f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.6rem;
  width:100%;
  position:fixed;
  top:0;
  left:0;
  z-index:1;

  .nav {
    display: flex;
    gap: 2.4rem;
    align-items: center;
  }
`;

export default StHeader;
