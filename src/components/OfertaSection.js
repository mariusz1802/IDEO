import React from "react";
import SectionTitle from "./SectionTitle.js";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { oferta } from "./data/contentData.js";
import TextContent from "./TextContent.js";

function OfertaSection() {
  return (
    
      <HV>
        <SectionTitleWrapper>
          <SectionTitle
            firstWord={oferta.titleFirstWord}
            underTitle={oferta.underTitle}
            color="white"
            underTitleColor="white"
          />
          <TextContent textContent={oferta.textContent} color="white" />
        </SectionTitleWrapper>
        <ContentContainer>
          <StaticImage src="../assets/calc.png" alt="Kalkulator" />
          <RectangleTextContainer>
            <TextContainer>
              <ul>
                <li>Książka przychodów i rozchodów</li>
                <li>Ryczałt od przychodów ewidencjonowanych</li>
                <li>Kadry i płace</li>
                <li>Pomoc przy zakładaniu działalności gospodarczej</li>
                <li>Pomoc przy pozyskaniu środków z Urzędu Pracy</li>
              </ul>
            </TextContainer>
          </RectangleTextContainer>
        </ContentContainer>
      </HV>
  );
}

export default OfertaSection;

const HV = styled.div`
  padding: 10vh 0 10vh 0;
  margin: 0 auto 0 0;
  height: 180vh;
  width: 100%;
  background: linear-gradient(#0072b6, #043694);
  margin-top: 20vh;
`;

const SectionTitleWrapper = styled.div`
  margin-left: 10vw;
`;

const ContentContainer = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
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
