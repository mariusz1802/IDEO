import React from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import HeroSVG from "../assets/Hero_bck.svg";
import { StaticImage } from "gatsby-plugin-image";
import ButtonHero from "./ButtonHero";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isMobile = useMediaQuery({maxWidth: 870})
  return (
    <>
      <BurgerMenu />
      <Navbar />
      <HeroStyled>

     {
       isMobile  ?

       <StaticImage
       src="../assets/Hero_bck_mobile.svg"
       alt="Background"
       layout="fullWidth"
       quality={100}
       objectFit="cover"
       style={{
         position: "absolute",
         top: 0,
         left: 0,
         zIndex: -1,
         width: "100%",
         height: "100%",
       }}
     />

     :
     <StaticImage
     src="../assets/Hero_bck.svg"
     alt="Background"
     layout="fullWidth"
     quality={100}
     objectFit="cover"
     style={{
       position: "absolute",
       top: 0,
       left: 0,
       zIndex: -1,
       width: "100%",
       height: "100%",
     }}
   />
       
    } 
   
        <TextContainer>
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
        </TextContainer>
      </HeroStyled>
    </>
  );
}

export default Hero;

const HeroStyled = styled.div`
  font-family: "Raleway", sans-serif;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;

  justify-content: center;
  margin: 0 auto;

  padding-left: 3%;
  @media screen and (max-width: 870px) {
    text-align: center;
    align-items: center;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  @media screen and (max-width: 870px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 100px;
    text-align: center;
    height: 100vh;
    backround: rgba(0, 0, 0, 0, 1);
  }

  @media screen and (max-width: 470px) {
    padding-top: 50px;
  }
`;

const H1_Styled = styled.h1`
  font-size: 90px;
  font-size: clamp(2rem, 4.5vw, 8rem);
  text-align: left;
  color: ${({ theme }) => theme.colors.darkBlue};
  span {
    color: ${({ theme }) => theme.colors.brightBlue};
  }
  @media screen and (max-width: 870px) {
    text-align: center;
  }
`;
const P_Styled = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: clamp(1.2rem, 1.9vw, 3rem);
  width: 50%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 870px) {
    width: 95%;
  }
`;
