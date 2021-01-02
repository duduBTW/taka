import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 80px;

  @media (max-width: 1300px) {
    width: 0px;
  }

  background: black;
`;

export const RoutesContainer = styled.div`
  margin-left: 15vw;

  @media (max-width: 1300px) {
    margin-left: 0px;
  }
`;
