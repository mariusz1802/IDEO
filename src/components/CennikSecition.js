import React from "react";
import SectionTitle from "./SectionTitle.js";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { cennikUslug } from "./data/contentData.js";
import TextContent from "./TextContent.js";

function CennikSecition() {
  return (
    <HV id="cennik">
      <SectionTitleWrapper>
        <TitlePosition>
          <SectionTitle
            firstWord={cennikUslug.titleFirstWord}
            secondWord={cennikUslug.titleSecondWord}
            underTitle={cennikUslug.underTitle}
          />
        </TitlePosition>
        <TextContent textContent={cennikUslug.textContent} />
      </SectionTitleWrapper>
      <ColumnContainer>
        <Column>
          <TitleColumn>Orientacyjne ceny: </TitleColumn>
          <ButtonImage
            href="https://www.cik.org.pl/kalkulator-cen-uslug-ksiegowych"
            target="_blank"
          >
            <StaticImage src="../assets/cik_button.png" alt="Przycisk_CIK" />
          </ButtonImage>
        </Column>

        <Column>
          <TitleColumn> Zapytaj o ofertę: </TitleColumn>
          <ButtonImage href="tel:+48790578923">
            <StaticImage
              src="../assets/zadzwon_button.png"
              alt="Zadzwoń_teraz"
            />
          </ButtonImage>
        </Column>
      </ColumnContainer>
    </HV>
  );
}

export default CennikSecition;

export const ButtonImage = styled.a`
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ukryj cokolwiek, co wychodzi poza przycisk */
  position: relative;
  transform: scale(1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.01); /* Powiększenie przycisku */
    box-shadow: 10px 10px 15px rgba(0, 109, 196, 0.4);
  }



  &:hover img {
    filter: brightness(1.2); /* Rozjaśnienie obrazu */
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    filter: brightness(1.15); /* Przyciemnienie domyślne */
    transition: filter 0.3s ease;
  }

 
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleColumn = styled.div`
  font-family: "Agbalumo";
  font-size: clamp(1.3rem, 3vw, 5rem);
  color: ${({ color, theme }) => color || theme.colors.titleColor};
`;

const TitlePosition = styled.div`
  display: flex;
  justify-content: center;
`;

const HV = styled.div`
  padding: 10vh 0 10vh 0;
  margin: 0 auto 0 0;
  width: 100%;
  margin-top: 10vh;
`;

const SectionTitleWrapper = styled.div`
  margin-left: 10vw;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10vh 15vw;
`;

const RectangleTextContainer = styled.div`
  margin-left: -150px;
  z-index: 20;
`;

const TextContainer = styled.div`
  font-family: "Monsterrat", sans-serif;
  font-weight: 700;
  padding: 30px 50px;
  font-size: clamp(1rem, 1.7vw, 3rem);
  margin-left: 4vw;
  margin-top: 5vh;
  font-weight: 100;
  width: 50vw;
  height: 50%;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: -10px 0px 8px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 10;
`;
