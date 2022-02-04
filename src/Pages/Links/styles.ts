import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;

  margin: 32px auto 0 auto;

  @media (max-width: 1100px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    margin-right: 14px;
  }

  > h1 {
    color: #fff;
  }

  @media (max-width: 1100px) {
    > h1 {
      font-size: 40px;
    }
  }
`;

export const LinksItems = styled.div`
  width: 1000px;

  display: flex;
  align-items: center;
  flex-direction: row;

  margin-top: 8px;

  &:last-child {
    margin-bottom: 18px;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  border: 0;
  border-radius: 4px;

  width: 100%;
  height: 46px;
  min-width: 80%;

  background-color: rgba(255, 255, 255, 0.15);

  /* padding-right: 20px; */
  margin-right: 14px;

  display: flex;
  align-items: center;
  padding: 0 14px;

  font-size: 18px;
  color: #fff;

  > svg {
    margin: 0 14px;
  }

  > label {
    padding-right: 14px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 1040px) {
    width: 100%;
  }
`;

export const Trash = styled.button`
  border: 0;
  background: transparent;
`;

export const LinkZero = styled.div`
  width: 100%;
  text-align: center;

  margin-top: 12%;

  > h3 {
    color: rgba(255, 255, 255, 0.5);
  }
`;
