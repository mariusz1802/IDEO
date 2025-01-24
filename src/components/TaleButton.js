import React from "react";
import styled from "styled-components";

function TaleButton({text, children}) {
  return (
    <ButtonContainer>
      {children}
      <Text>{text}</Text>
    </ButtonContainer>
  );
}
export default TaleButton;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  border-radius: 20px;
  border: 8px solid ${({ theme }) => theme.colors.titleColor};
  background: linear-gradient(#d9d9d9, #efefef);
  transition: all .5 ;
  &:hover {
    cursor: pointer;
    background: linear-gradient(#EAEAEAFF, #CFCFCFFF);
  }
`;

const Text = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: clamp(1rem, 1.5vw, 4rem);
  text-align: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.titleColor};
`;
