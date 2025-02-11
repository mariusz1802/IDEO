import React from "react";
import SectionTitle from "./SectionTitle.js";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { oferta } from "./data/contentData.js";
import TextContent from "./TextContent.js";

function OfertaSection() {
  return (
    <HV id="oferta">
        <SectionTitle
          firstWord={oferta.titleFirstWord}
          underTitle={oferta.underTitle}
          color="white"
          underTitleColor="white"
          />
          <SectionTitleWrapper>
        <TextContent textContent={oferta.textContent} color="white" />
      </SectionTitleWrapper>
      <ContentContainer>
        <div
          // data-sal="slide-right"
          // data-sal-easing="ease-out-back"
          // data-sal-delay="300"
          // data-sal-duration="1200"
        >
          <StaticImage src="../assets/calc.png" alt="Kalkulator" 
    
          />
        </div>
        <RectangleTextContainer 
        // data-sal="slide-left" 
        // data-sal-delay="300"
        >
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
  width: 100%;
  background: linear-gradient(#0072b6, #043694);
  margin-top: 20vh;
`;

const SectionTitleWrapper = styled.div`
  margin-left: 3vw;

`;

const ContentContainer = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  padding-top: 0;

  }
`;

const RectangleTextContainer = styled.div`
  margin-left: -150px;
  z-index: 20;
  @media screen and (max-width: 700px) {
    margin-left: 0;
    margin-bottom: 30px;
  }
`;

const TextContainer = styled.div`
  font-weight: 900;
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
  padding: 30px;
  /* padding: 30px; */
  @media screen and (max-width: 870px) {
    /* padding: 10px 20px; */
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    margin-bottom: 30px;
    height: 80%;
    margin-left: 0;
    font-size: 1.3rem;
    /* padding: 30px; */
    margin-top: 5vh;
  }
`;
