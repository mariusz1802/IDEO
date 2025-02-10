import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SectionTitle from "./SectionTitle.js";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { strefaKlienta } from "./data/contentData.js";
import TextContent from "./TextContent.js";

function StrefaKlienta() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            relativePath
            id
          }
        }
      }
    }
  `);
  return (
    <HV id="strefaKlienta">
        <TitlePosition>
          <SectionTitle
            firstWord={strefaKlienta.titleFirstWord}
            secondWord={strefaKlienta.titleSecondWord}
            underTitle={strefaKlienta.underTitle}
            textAlign="center"
            />
        </TitlePosition>
            <SectionTitleWrapper>
        <TextContent textContent={strefaKlienta.textContent} />
      </SectionTitleWrapper>
      <ColumnContainer>
        <Column>
          <ButtonImage
            href="/static/723fb4ce79718f4ea8d51ef46a3bc15b/Umowa o pracę - wzór.pdf"
          download
          >
            <StaticImage
              src="../assets/umowa-o-prace.png"
              alt="Umowa_o_pracę.pdf"
            />
          </ButtonImage>
          <ButtonImage
            href="/static/9ade32d350337de1ce378af0f550dbae/Pełnomocnictwo ZUS - PEL.pdf"
         download
          >
            <StaticImage
              src="../assets/pelnomocnitwo-zus.png"
              alt="Pełnomocnictwo_ZUS.pdf"
            />
          </ButtonImage>
        </Column>

        <Column>
          <ButtonImage href="/static/1ea9537371de565907631eb07b23a73e/Umowy zlecenie - wzór.pdf" download>
            <StaticImage
              src="../assets/umowa-zlecenie.png"
              alt="Umowa_Zlecenie.pdf"
            />
          </ButtonImage>
          <ButtonImage href="/static/cc8fd4ccfbc88abad0bb937e4a3887bc/Pełnomocnictwo US - UPL-1P.pdf" download>
            <StaticImage
              src="../assets/pelnomocnictwo-us.png"
              alt="Pełnomocnictwo_US.pdf"
            />
          </ButtonImage>
        </Column>
      </ColumnContainer>
    </HV>
  );
}

export default StrefaKlienta;

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
  margin: 5px;
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
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

const RectangleTextContainer = styled.div`
  margin-left: -150px;
  z-index: 20;
`;
