import styled from "styled-components";

export const Total = styled.div`
  background: black;
  position: sticky;
  top: 0px;
  color: white;
  min-width: 300px;
  height: 100vh;
  padding: 0px;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-size: 1.6rem;
    letter-spacing: 2px;
    font-weight: 300;
  }
  .price {
    font-size: 4rem;
    font-weight: 500;
    padding: 10px 20px 80px 20px;
    letter-spacing: 5px;
  }

  button {
    background: white;
    border: none;
    color: black;
    padding: 20px;
    width: 100%;
    font-size: 2rem;
  }
`;

interface CardPorp {
  image: string;
}

export const CartItem = styled.div`
  margin: 25px 0px;
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(0, 0, 0, 0.5)),
      color-stop(40%, rgba(0, 0, 0, 0.98))
    ),
    url(${({ image }: CardPorp) => image}) no-repeat center center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 400px;
  color: white;

  padding: 30px 60px;
  position: relative;

  .icon {
    position: absolute;
    bottom: 25px;
    right: 10px;
  }

  .price {
    letter-spacing: 2px;
    font-size: 3.5rem;
    font-weight: 600;

    margin-top: 30px;
  }

  .type {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 2.08rem;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .description {
    font-size: 1.23rem;
  }
`;
