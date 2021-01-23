import styled from "styled-components";

export const TwitchContainer = styled.div`
  /* padding: 30px 60px; */
  height: 90vh;
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
    font-weight: 600;
    letter-spacing: 4px;
    padding-bottom: 10px;
  }

  span {
    color: #cecece;
  }
`;

export const ContactContainer = styled.div`
  /* padding: 30px 60px; */
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;

  h1 {
    color: black;
    margin: 0px;
    padding: 0px;
    font-size: 3.36rem;
    font-weight: 600;
    letter-spacing: 4px;
    padding-bottom: 10px;
  }

  .social {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
      transition: 0.2s ease-in-out;
      cursor: pointer;
      width: 25vw;

      :hover {
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
      }
    }
  }
`;
