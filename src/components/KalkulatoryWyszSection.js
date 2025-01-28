import React from "react";
import SectionTitle from "./SectionTitle.js";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { kalkulatoryWyszukiwarki } from "./data/contentData.js";
import TextContent from "./TextContent.js";

function KalkulatoryWyszSection() {
  return (
    <HV id="kalkulatory">
      <SectionTitleWrapper>
        <TitlePosition>
          <SectionTitle
            firstWord={kalkulatoryWyszukiwarki.titleFirstWord}
            secondWord={kalkulatoryWyszukiwarki.titleSecondWord}
            underTitle={kalkulatoryWyszukiwarki.underTitle}
            textAlign="center"
          />
        </TitlePosition>
        <TextContent textContent={kalkulatoryWyszukiwarki.textContent} />
      </SectionTitleWrapper>
      <ColumnContainer>
        <Column>
          <ButtonImage
            href="https://www.podatki.gov.pl/generator-mikrorachunku-podatkowego"
            target="_blank"
          >
            <StaticImage
              src="../assets/Generato.png"
              alt="Generator_Mikrorachunku_Podatkowego"
            />
          </ButtonImage>
          <ButtonImage
            href="https://www.podatki.gov.pl/wykaz-podatnikow-vat-wyszukiwarka"
            target="_blank"
          >
            <StaticImage
              src="../assets/Wyszukiwarka_VAT.png"
              alt="Wyszukiwarka Czynnego Podatnika VAT"
            />
          </ButtonImage>
        </Column>

        <Column>
          <ButtonImage href="https://eskladka.pl/Home" target="_blank">
            <StaticImage
              src="../assets/Wyszukiwarka_Numeru.png"
              alt="Wyszukiwarka numeru rachunku składkowego"
            />
          </ButtonImage>
          <ButtonImage
            href="https://www.podatki.gov.pl/kalkulatory-podatkowe/kalkulator-odsetek-za-zwloke-od-zaleglosci-podatkowych-oraz-oplaty-prolongacyjnej/"
            target="_blank"
          >
            <StaticImage
              src="../assets/Kalkulator_Odsetek.png"
              alt="Kalkulator Odsetek podatkowch"
            />
          </ButtonImage>
        </Column>
      </ColumnContainer>
    </HV>
  );
}

export default KalkulatoryWyszSection;

const ButtonImage = styled.a`
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

  &:hover::before {
    content: "";
    position: absolute;
    top: -150%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(45deg);
    animation: shine 0.5s ease-in-out;
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

  @keyframes shine {
    0% {
      top: -150%;
      left: -50%;
    }
    100% {
      top: 150%;
      left: 150%;
    }
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
  padding: 0 0 10vh 0;
  margin: 0 auto 0 0;
  width: 100%;
  margin-top: 10vh;
`;

const SectionTitleWrapper = styled.div`
  margin-left: 10vw;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  width: 50%;
  justify-content: space-around;
`;
