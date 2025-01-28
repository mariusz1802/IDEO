import React from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import { StaticImage } from "gatsby-plugin-image";
import ButtonHero from "./ButtonHero";

function Hero() {
  return (
    <>
      <BurgerMenu />
      <Navbar />
      <HeroStyled>
        <StaticImage
          src="../assets/Hero_bck.svg"
          alt="Background"
          layout="fullWidth"
          quality={100}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}

        />
        <div>
          <H1_Styled>
            Księgowość <br />
            <span> dla Twojego biznesu </span>
          </H1_Styled>
          <P_Styled>
            Oferujemy kompleksowe usługi księgowe dostosowane do potrzeb Twojego
            biznesu. Zadbamy o Twoje finanse, abyś mógł skupić się na tym, co
            najważniejsze.
          </P_Styled>
          <ButtonHero />
        </div>
      </HeroStyled>
    </>
  );
}

export default Hero;

const HeroStyled = styled.div`
  font-family: "Raleway", sans-serif;
  position: relative;
  width: 100%; /* Rozciągnięcie na 100% szerokości ekranu */
  height: 100vh; /* Wysokość na 100% widoku */
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  padding-left: 3%;
  overflow: hidden; /* Zapobiega wychodzeniu elementów poza kontener */
`;

const H1_Styled = styled.h1`
  font-size: 90px;
  font-size: clamp(1.5rem, 4.5vw, 8rem);
  text-align: left;
  color: ${({ theme }) => theme.colors.darkBlue};
  span {
    color: ${({ theme }) => theme.colors.brightBlue};
  }
`;

const P_Styled = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: clamp(1rem, 1.9vw, 3rem);
  width: 50%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
