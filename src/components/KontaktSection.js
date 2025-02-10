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
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import ContactForm from "./ContactForm.js";
import MyMap from "./MyMap.js";
import { A } from "storybook/internal/components";

function KontaktSection() {
  return (
    <HV id="kontakt">
        <TitlePosition>
          <SectionTitle
            firstWord={kontakt.titleFirstWord}
            secondWord={kontakt.titleSecondWord}
            underTitle={kontakt.underTitle}
            textAlign="center"
            />
        </TitlePosition>
            <SectionTitleWrapper>
        <TextContent textContent={kontakt.textContent} />
      </SectionTitleWrapper>
      <IconContext.Provider value={{ size: "1.8em", color: "#444343" }}>
        <ColumnWrapper>
          <Column>
            <H3_title>Dane Kontaktowe: </H3_title>
            <Row>
              <FaPhoneAlt />
              <PStyled>
                {" "}
                <AStyle href="tel: +48790578923">+48 790 578 923</AStyle>
              </PStyled>
            </Row>
            <Row>
              <IoMail />
              <PStyled>
                <AStyle href="mailto: biuro@ideo.pl">biuro@ideo.pl </AStyle>
              </PStyled>
            </Row>
            <Row>
              <FaSquareFacebook />
              <PStyled>
                <AStyle
                  href="https://www.facebook.com/ideoksiegowosc"
                  target="_blank"
                >
                  Facebook
                </AStyle>
              </PStyled>
            </Row>
            <Row>
              <TiHome />
              <PStyled>
                Lipcowa 5 <br /> Bielawa
              </PStyled>
            </Row>
            <MapWrapper>
              <H3_title>Mapa:</H3_title>
              <MyMap />
              <StaticImage
                src="https://www.google.com/maps/@?api=1&map_action=map&center=41.8781%2C-87.6298"
                alt="mapa"
              />
            </MapWrapper>
          </Column>
          <Column>
          <H3_title>Formularz kontaktowy: </H3_title>
            <ContactForm />
          </Column>
        </ColumnWrapper>
      </IconContext.Provider>
    </HV>
  );
}

const H3_title = styled.h3`
  font-family: "Agbalumo" !important;
  font-size: clamp(1.2rem, 2vw, 3rem);
  @media screen and (max-width: 700px) {
    font-size: 2.2rem;
    margin: 25px 0;
  }
`;

const AStyle = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

export default KontaktSection;
const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

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
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;

  justify-content: space-around;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: auto;
    text-align: center;

  }
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
