import styled from "styled-components";

const StTrending = styled.div`
  margin-top: 2.4rem;
  animation: animate-2 2s;
  .cont::-webkit-scrollbar {
    display: none;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.6rem;
    padding:0 1.6rem;
  }

  .cont {
    display: flex;
    overflow: scroll;
    gap: 1.6rem;
    padding-left:1.6rem;
  }

  .img {
    position: relative;
    height: 14rem;
    width:70vw;
    border-radius:1rem;
  }

  .info {
    position: absolute;
    bottom: 1.6rem;
    left: 1.6rem;
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
    font-size: 15px;
  }

  .img button{
    position:absolute;
    top:1rem;
    right:1rem;
    background:#10141e96;
    border-radius: 50%;
    width:3.2rem;
    height:3.2rem;
  }

  @media only screen and (min-width: 420px) {
    .img {
      height: 16rem;
      width: 65vw;
    }
  }

  @media only screen and (min-width: 530px) {
    .img {
      height: 16rem;
      width: 60vw;
    }
  }

  @media only screen and (min-width: 600px) {
    .img {
      height: 16rem;
      width: 50vw;
    }
  }

  @media only screen and (min-width: 700px) {
    .img {
      height: 16rem;
      width: 45vw;
    }
  }

  @media only screen and (min-width: 800px) {
    padding-left:10rem;
    margin-top:5rem;

    .img {
      height: 16rem;
      width: 40vw;
    }

    h3 {
      font-size:3.5rem;
    }
  }

  @media only screen and (min-width: 900px) {
    .img {
      height: 16rem;
      width: 35vw;
    }
  }

  @media only screen and (min-width: 1000px) {
    .img {
      height: 20rem;
      width: 35vw;
    }
  }

  @keyframes animate-2{
    0%{
      transform:translate(100rem);
      opacity:0;
    }

    80%{
      transform:translate(-5rem);
      opacity:.8;
    }

    100%{
      ransform:translate(0);
      opacity:1;
    }
  }

`;

export default StTrending;
