import styled from "styled-components";

export const Header = styled.div`
  max-width: 100vw;
  position: sticky;
  top: 0px;
  /* margin: 50px auto; */
  padding: 10px;
  text-align: center;
  background: black;

  color: white;
  font-size: 1.8rem;
  letter-spacing: 10px;

  z-index: 3;
`;

export const Image = styled.div`
  position: relative;
  cursor: pointer;
  background-color: white;
  max-height: 90vh;

  img {
    display: block;
    width: 100%;
    max-height: 90vh;
    object-fit: cover;
    object-position: top;
  }

  :hover {
    .overlay {
      opacity: 0.8;
    }
  }

  :active {
    .overlay {
      opacity: 1;
    }
  }

  .overlay {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    opacity: 0;
    transition: 0.4s ease;

    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: black;
    padding: 20px 0px;

    .title {
      font-size: 2.5rem;
      font-weight: bold;
    }

    .subtitle {
      font-size: 1.2rem;
      margin-bottom: 20px;
      font-weight: normal;
    }

    .desc {
      font-size: 1rem;
      font-weight: normal;
    }
  }
`;

export const Content = styled.div`
  max-width: 100vw;
  margin: 0px auto;

  img {
    max-width: 100%;
  }
`;
