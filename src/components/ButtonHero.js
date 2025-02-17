import React from "react";
import styled from "styled-components";

const RoundButton = styled.button`
  font-family: "Raleway";
  font-size: clamp(1.5rem, 2vw, 8rem);
  background-color: #011882; /* Kolor bazowy */
  color: #fff; /* Kolor tekstu */
  border: none;
  border-radius: 60px; /* Okrągły kształt */
  width: 320px; /* Szerokość przycisku */
  height: 120px; /* Wysokość przycisku */
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.brightBlue}; /* Kolor po najechaniu */
    transform: scale(1.1); /* Powiększenie przycisku */
  }
  /* Animacja tła */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 60px;
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }

  &:hover::before {
    width: 200%;
    height: 200%;
  }
`;

const ButtonHero = () => {
  return <RoundButton>Sprawdź</RoundButton>;
};

export default ButtonHero;
