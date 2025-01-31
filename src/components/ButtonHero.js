import React from "react";
import styled from "styled-components";

const RoundButton = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: clamp(2rem, 2vw, 8rem);
  background: linear-gradient(#092abeff, #011882); /* Kolor bazowy */
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
    background: linear-gradient(
      #2145e7ff,
      #0b2dc2ff
    ); /* Kolor bazowy *
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
    background: rgba(255, 255, 255, 0.05);
    border-radius: 60px;
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }

  &:hover::before {
    width: 200%;
    height: 200%;
  }

  @media screen and (max-width: 870px) {
    border: 2px solid white;
  }
  @media screen and (max-width: 470px) {
    width: 250px; /* Szerokość przycisku */
    height: 100px;
  }
`;

const ButtonHero = () => {
  return (
    <RoundButton
      data-sal="zoom-in"
      data-sal-easing="ease-out-back"
      data-sal-delay="300"
      data-sal-duration="800"
    >
      Sprawdź
    </RoundButton>
  );
};

export default ButtonHero;
