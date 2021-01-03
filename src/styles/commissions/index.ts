import styled from "styled-components";

export const Title = styled.div`
  min-width: 100px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  position: fixed;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  font-size: clamp(2rem, 3vw, 3rem);

  font-weight: bold;

  background: black;
  width: 140px;

  color: white;
  line-height: 80px;

  z-index: 4;
`;

export const Content = styled.section`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  color: white;
  width: 100%;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .slide {
    margin-right: 500px;
    height: 100%;
    width: 100%;

    height: 100%;
    @media (min-width: 1300px) {
      width: 85vw;
    }

    @media (max-width: 1300px) {
      width: 100vw;
    }

    display: flex;
    /* flex-direction: column; */
    /* margin-left: 10vw; */

    .body {
      flex-grow: 5;
      background: black;
      height: 100%;
      /* 
        @media (min-width: 1300px) {
          transform: translateX(0%);
        } */

      z-index: -1;
      max-width: 800px;

      padding: 50px 20% 50px 5vw;

      display: flex;
      align-items: flex-start;
      flex-direction: column;

      .price {
        margin-top: 3vw;
        font-size: clamp(2.5rem, 3.5vw, 3.6rem);

        font-weight: 600;
        letter-spacing: 3px;

        ::after {
          margin-left: 20px;
          text-transform: uppercase;
          font-weight: 400;
          content: "basic";
          font-size: 0.7rem;
        }

        color: white;
        margin-bottom: 4.5vw;
      }

      .desc {
        font-size: clamp(0.9rem, 1vw, 1.2rem);
        color: white;
        max-height: 300px;
        overflow-y: hidden;
        margin-bottom: 4.5vw;
        line-height: 33px;
      }
    }
  }
`;

interface ImagePorp {
  link: string;
}

export const Image = styled.div`
  margin: 20px 0px;
  flex-grow: 3;

  @media (max-width: 1300px) {
    /* transform: translateX(-20%); */
  }

  min-width: 300px;
  margin-right: 100px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: white;
  background-image: ${({ link }: ImagePorp) => `url(${link})`};

  /* background-image: url("https://pbs.twimg.com/media/Eqeg9R3VoAIQ0O2?format=jpg&name=large"); */
`;

export const Header = styled.header`
  /* background: blue; */
  /* width: 100vw; */
  height: 100vh;

  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  padding-left: 40px;

  .main {
    /* margin: 0px 4vw; */
    flex-grow: 1;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 4vw;
    h1 {
      margin: 0px;
      padding: 0px;

      font-size: clamp(1rem, 2.5vw, 4.5rem);
      font-weight: 600;
      letter-spacing: 40px;
    }

    h2 {
      margin: 0px;
      padding: 0px;

      font-size: 1.4rem;
      letter-spacing: 5px;
      text-transform: uppercase;
      font-weight: 400;
      color: #515151;
      line-height: 35px;
    }

    .link {
      text-align: center;
      text-transform: uppercase;
      padding: 20px;
      color: white;
      text-decoration: none;
      background: black;
      margin: 20px 0px;
      border: none;
      width: 50%;

      font-size: 1.3rem;
      font-weight: 500;
      letter-spacing: 10px;
    }
  }

  .card {
    flex-grow: 1;
    text-align: center;
    width: 100%;
  }
`;

interface ThumbItemPorp {
  active: boolean;
}

export const ThumbItem = styled.div`
  padding: 15px 25px;
  margin: 20px 20px 20px 0px;
  color: white;

  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;

  letter-spacing: 2px;

  border-radius: 4px;

  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);

  transform: translateY(0px);
  transition: all 0.4s;
  :hover {
    transition: all 0.4s;
    transform: translateY(-4px);
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.19), 0 5px 5px rgba(0, 0, 0, 0.23);
    /* background: grey; */
  }

  :active {
    transition: all 0.2s;
    transform: translateY(2px);
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.19), 0 2px 2px rgba(0, 0, 0, 0.23);
  }

  background: ${({ active }: ThumbItemPorp) => (!active ? "white" : "black")};
  color: ${({ active }: ThumbItemPorp) => (!active ? "black" : "white")};
`;

export const Button = styled.button`
  text-transform: uppercase;
  padding: 20px 20px;
  color: black;
  background: none;
  border: 4px solid green;
  margin: 20px 0px;
  cursor: pointer;

  width: 100%;

  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 4px;

  position: relative;

  transition: transform 0.4s;
  transform-style: preserve-3d;

  :hover {
    transition: all 0.4s;
    border-color: white;

    ::after {
      transform: translate3D(0px, 0px, 0px);
    }
  }

  ::after {
    position: absolute;
    z-index: -10;
    transition: transform 0.4s;
    content: "";
    background: white;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    transform: translate3D(8px, 8px, 0px) translateZ(-1px);
  }
`;
