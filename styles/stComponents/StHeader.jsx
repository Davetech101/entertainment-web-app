import styled from "styled-components";

const StHeader = styled.header`
  > div {
    background: #161d2f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.6rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  span{
    cursor:pointer;
  }

  .nav {
    display: flex;
    gap: 2.4rem;
    align-items: center;
  }

  @media only screen and (min-width: 800px) {
    .mobile {
      display: none;
    }

    > div{
      flex-direction:column;
      top: 2rem;
      left: 2rem;
      bottom:2em;
      width: 6rem;
      border-radius:4rem;
      opacity:4;
      transition:opacity .3s;
    }

    > div:hover{
      opacity:1;
    }

    nav {
      flex-direction:column;
    }
  }
`;

export default StHeader;
