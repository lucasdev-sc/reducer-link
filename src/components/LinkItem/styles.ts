import styled, { keyframes } from "styled-components";

interface TextProps {
  animation?: boolean;
  visibily: string
}

const SlideX = keyframes`
  from{
    transform: translateX(90px);
  }
  to{
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 4%;

  animation: ${SlideX} 1.5s;

  background-color: #fff;

  padding: 14px;

  width: 700px;

  border-radius: 4px;

  @media (max-width: 735px) {
    width: 90%;
  }

  display: flex;
  flex-direction: column;

  > span {
    margin: 14px 0;
    color: #a7a7a7;
    font-size: 14px;
  }

  > button {
    background-color: #172742;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 14px;

    height: 38px;

    border: 0;
    border-radius: 4px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    border: 0;
    background: transparent;
  }
`;

export const TextConfirm = styled.p<TextProps>`
  color: green;
  font-weight: bold;
  font-size: 12px;

  padding-top: 8px;

  animation: ${SlideX} 1.5s;

  display: ${(props) => props.visibily};
`;
