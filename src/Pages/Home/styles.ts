import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: -8%;

  > h1 {
    font-size: 40px;
    color: #fff;
  }

  > span {
    color: #fff;
    margin-top: 14px;
    margin-bottom: 24px;
    font-size: 19px;
  }

  > img{
    width: 100px;
  }

  @media (max-width: 615px) {
    > img {
      width: 95px;
    }

    > h1 {
      font-size: 40px;
    }

    > span {
      font-size: 16px;
    }
  }
`;

// Animated function for Up AreaInput
const SlideY = keyframes`
    from{
        transform: translateY(90px);
    }
    to{ 
        transform: translateY(0px);
    }
`;

export const AreaInput = styled.div`
  width: 540px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: -8%;

  /* Animation Up Input */
  animation: ${SlideY} 2s;

  > button {
    width: 100%;
    height: 46px;

    border-radius: 4px;
    border: 0;

    font-size: 16px;
    color: #000;
    font-weight: bold;

    margin-top: 8px;

    transition: transform 0.7s;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 615px) {
    width: 85%;
  }
`;

export const LinkEncurt = styled.div`
  width: 100%;
  height: 46px;

  background-color: rgba(255, 255, 255, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  > svg {
    margin: 0 8px;
  }

  > input {
    width: 100%;
    height: 46px;

    background: transparent;
    color: #fff;

    border: 0;
    outline: none;

    font-size: 18px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
