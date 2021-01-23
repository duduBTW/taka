import styled from "styled-components";

export const ContactContainer = styled.div`
  /* padding: 30px 60px; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: black;

  h1 {
    color: white;
    margin: 0px;
    padding: 0px;
    font-size: 3.36rem;
    padding-bottom: 10px;
  }

  span {
    color: #cecece;
  }
`;
export const Form = styled.form`
  border: 1px solid white;
  width: 700px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 20px 0px 25px 0px;
`;

export const Input = styled.input`
  border: none;
  /* border-bottom: 1px solid white; */
  background: #1f1f1f;
  padding: 20px 35px;
  color: white;
  margin-bottom: 30px;

  font-size: 2rem;

  width: 80%;

  outline: none;
  text-align: start;
`;

export const Label = styled.div`
  background: black;
  color: white;
  /* width: 30vw; */
  font-size: 1.19rem;
  padding: 20px 20px 20px 50px;
`;
