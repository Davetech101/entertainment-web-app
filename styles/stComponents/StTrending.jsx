import styled from "styled-components";

const StTrending = styled.div`
  margin-top: 2.4rem;

  .img{
   position:relative;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }

  .info{
    position:absolute;
    bottom:1.6rem;
    left:1.6rem1;
  }

  .stats{
    display:flex;
    align-items:center;
    gap:8px;
  }

  .dot{
    width:4px;
    height:4px;
    background:#FFF;
    border-radius:50%;
  }

  .stat{
    font-size: 12px;
    font-weight:300;
  }

  .title{
    font-size: 15px;
  }
`;

export default StTrending;
