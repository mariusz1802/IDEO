import React from "react";
import styled from "styled-components";

function RectangleText({ text }) {
  return <TextContainer>{text}</TextContainer>;
}

export default RectangleText;

export const TextContainer = styled.div`
  padding: 30px 50px;
  font-size: clamp(1rem, 1.7vw, 3rem);
  margin-left: 4vw;
  margin-top: 5vh;
  font-weight: 100;
  width: 50vw;
  height: 50%;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 10px 0px 8px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 10;
  @media screen and (max-width: 870px) {
    padding: 10px 20px;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    margin-bottom: 30px;
    height: 80%;
    margin-left: 0;
    font-size: 1.3rem;
  }
`;
