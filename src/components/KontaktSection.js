import React from "react";
import styled from "styled-components";
import { kontakt } from "./data/contentData.js";
import SectionTitle from "./SectionTitle.js";
import TextContent from "./TextContent.js";
import { IconContext } from "react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { StaticImage } from "gatsby-plugin-image";
import ContactForm from "./ContactForm.js";

function KontaktSection() {
  return (
    <HV id="kontakt">
      <SectionTitleWrapper>
        <TitlePosition>
          <SectionTitle
            firstWord={kontakt.titleFirstWord}
            secondWord={kontakt.titleSecondWord}
            underTitle={kontakt.underTitle}
          />
        </TitlePosition>
        <TextContent textContent={kontakt.textContent} />
      </SectionTitleWrapper>
      <IconContext.Provider value={{ size: "1.8em", color: "#444343" }}>
        <ColumnWrapper>
          <Column>
            <Row>
              <FaPhoneAlt />
              <PStyled>+48 790 578 923</PStyled>
            </Row>
            <Row>
              <IoMail />
              <PStyled>biuro@ideo.pl</PStyled>
            </Row>
            <Row>
              <FaSquareFacebook />
              <PStyled>Facebook</PStyled>
            </Row>
            <Row>
              <TiHome />
              <PStyled>
                Lipcowa 5 <br /> Bielawa
              </PStyled>
            </Row>
            <StaticImage src="../assets/mapa.jpg" alt="Mapa" />
          </Column>
          <Column>
            <ContactForm />
          </Column>
        </ColumnWrapper>
      </IconContext.Provider>
    </HV>
  );
}

export default KontaktSection;

const PStyled = styled.p`
  margin-left: 10px;
  font-size: clamp(1rem, 1.2vw, 2rem);
  font-weight: 300;
`;

const ColumnWrapper = styled.div`
  display: flex;
  margin-top: 3vh;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  width: 80%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  justify-content: space-around;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const HV = styled.div`
  padding: 0 0 10vh 0;
  margin: auto;
  width: 100%;
  margin-top: 10vh;
`;

const SectionTitleWrapper = styled.div`
  margin-left: 10vw;
`;

const TitlePosition = styled.div`
  display: flex;
  justify-content: center;
`;
