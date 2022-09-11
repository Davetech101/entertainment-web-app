import styled from "styled-components";

const StAuth = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width:50rem;
  margin:0 auto;

  h2 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }

  .card {
    background: #161d2f;
    margin-top: 3rem;
    padding: 2.4rem;
    width: 90%;
  }

  input {
    display: block;
    border-bottom: 1px solid #ffffff82;
    width: 100%;
    padding: 2rem;
    color:#fff;
  }

  button {
    background: #fc4747;
    border-radius: 6px;
    border:none;
    display:block;
    width:70%;
    margin:3rem auto 2rem;
    padding:1rem 3rem;
    color:#fff;
  }

  aside{
    font-size:1.5rem;
    text-align:center;
  }

  a{
    color:#FC4747;
  }
`;
export default StAuth;
