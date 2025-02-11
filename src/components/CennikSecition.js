import React from "react";
import SectionTitle from "./SectionTitle.js";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { cennikUslug } from "./data/contentData.js";
import TextContent from "./TextContent.js";

function CennikSecition() {
  return (
    <HV id="cennik">
        <TitlePosition>
          <SectionTitle
            firstWord={cennikUslug.titleFirstWord}
            secondWord={cennikUslug.titleSecondWord}
            underTitle={cennikUslug.underTitle}
            textAlign="center"
            />
        </TitlePosition>
            <SectionTitleWrapper>
        <TextContent textContent={cennikUslug.textContent} />
      </SectionTitleWrapper>
      <ColumnContainer>
        <Column
        data-sal="slide-right"
        data-sal-easing="ease-out-back"
        data-sal-delay="300"
        data-sal-duration="1200"
        >
          <TitleColumn>Orientacyjne ceny: </TitleColumn>
          <ButtonImage
            href="https://www.cik.org.pl/kalkulator-cen-uslug-ksiegowych"
            target="_blank"
          >
            <StaticImage src="../assets/cik_button.png" alt="Przycisk_CIK" />
          </ButtonImage>
        </Column>

        <Column
        data-sal="slide-left"
        data-sal-easing="ease-out-back"
        data-sal-delay="300"
        data-sal-duration="1200"
        >
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
  overflow: hidden; //Ukryj cokolwiek, co wychodzi poza przycisk
  position: relative;
  display: inline-block;
  transform: scale(1);
  width: 440px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media screen and (max-width: 600px){
    width:300px;
  }

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
  margin-right: 25px;
`;

const TitleColumn = styled.div`
  font-family: "Agbalumo";
  font-size: clamp(1.3rem, 3vw, 5rem);
  color: ${({ color, theme }) => color || theme.colors.titleColor};
  @media screen and (max-width: 700px) {
    font-size: 2.2rem;
  }
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
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10vw;
  }
`;
