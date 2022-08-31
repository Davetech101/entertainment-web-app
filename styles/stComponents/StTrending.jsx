import styled from "styled-components";

const StTrending = styled.div`
  margin-top: 2.4rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }

  .cont {
    display: flex;
    overflow: scroll;
    gap: 1.6rem;
  }

  .img {
    position: relative;
    height: 14rem;
    width:24rem;
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
`;

export default StTrending;
