import styled from "styled-components";

const StMovies = styled.section`
  margin-top: 2.4rem;
  animation: animate 2s;

  p {
    font-size: 2rem;
    margin: 2.4rem 0;
    padding: 0 1.6rem;
  }

  h2 {
    font-size: 2rem;
    margin: 2.4rem 0;
    padding: 0 1.6rem;
  }

  .cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 3px;
    padding: 0 1.6rem;
    width: 100%;
  }

  .img {
    height: 11rem;
    width: 40vw;
    margin-bottom: 6rem;
    border-radius: 8px;
    position: relative;
  }

  .info {
    position: relative;
    bottom: -12rem;
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dot {
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
  }

  .stat {
    font-size: 12px;
    font-weight: 300;
  }

  .title {
    font-size: 16px;
  }

  .img button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #10141e96;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
  }

  @media only screen and (min-width: 375px) {
    .img {
      height: 11rem;
      width: 45vw;
    }
  }

  @media only screen and (min-width: 520px) {
    .img {
      height: 13rem;
      width: 30vw;
    }

    .info {
      bottom: -14rem;
    }
  }

  @media only screen and (min-width: 760px) {
    .img {
      height: 15rem;
      width: 28vw;
    }

    .info {
      bottom: -15.5rem;
    }
  }

  @media only screen and (min-width: 800px) {
    .img {
      height: 15rem;
      width: 24vw;
    }

    h2 {
      font-size: 3.5rem;
      padding-left: 10rem;
    }

    main {
      padding-right: 3rem;
      padding-left: 10rem;
    }

    p {
     padding-left: 10rem;
    }
  }

  @media only screen and (min-width: 1000px) {
    .img {
      height: 18rem;
      width: 25vw;
    }

    .info {
      bottom: -19.5rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .img {
      height: 16rem;
      width: 20vw;
    }

    .info {
      bottom: -17rem;
    }
  }

  @keyframes animate {
    0% {
      transform: translate(-100rem);
      opacity: 0;
    }

    80% {
      transform: translate(5rem);
      opacity: 0.8;
    }

    100% {
      ransform: translate(0);
      opacity: 1;
    }
  }
`;

export default StMovies;
