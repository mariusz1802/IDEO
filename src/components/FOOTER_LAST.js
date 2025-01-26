import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ButtonImage } from "./CennikSecition";
function Footer() {
  return (
    <FooterContainer>
      <CardContainer>
        <StaticImage src="../assets/Logo.svg" alt="IDEO_Logo" />
        <TextContainer>
          Profesjonalne usługi księgowe i podatkowe. Skontaktuj się z nami, aby
          dowiedzieć się, jak możemy wesprzeć Twoją firmę w osiąganiu sukcesu
          finansowego{" "}
        </TextContainer>
      </CardContainer>
      <BlueContainer>
        <MainSection>
          <Column>
            <TitleColumn>Kontakt:</TitleColumn>
            <P_Styled>
              Potrzebujesz więcej informacji? Chętnie odpowiemy na każde
              twoje pytanie. Dzwoń lub pisz!{" "}
            </P_Styled>

            <div>
              <Row>
                <FaPhoneAlt color="white" font-size="1.8rem" />

                <P_Styled>+48 790 578 923</P_Styled>
              </Row>
              <Row>
                <IoMail color="white" font-size="2rem" padding="0" margin="0" />
                <P_Styled>biuro@ideo.info.pl</P_Styled>
              </Row>
            </div>
          </Column>
          <Column>
            <TitleColumn>Oferta:</TitleColumn>
            <ul>
              <LiStyled>Cennik</LiStyled>
              <LiStyled>Opinie</LiStyled>
              <LiStyled>Strefa Klienta</LiStyled>
              <LiStyled>Kalkulatory i wyszukiwarki</LiStyled>
              <LiStyled>Kontak</LiStyled>
            </ul>
          </Column>
          <Column>
            <TitleColumn>Certyfikat:</TitleColumn>
            <ButtonImage
              href="https://www.cik.org.pl/biuro/ideo-marta-szkatulska-94918"
              target="_blank"
            >
              <StaticImage
                src="../assets/CIK_footer_btn.png"
                alt="Przycisk_CIK"
              />
            </ButtonImage>
          </Column>
        </MainSection>

        <BottomLine>
          &copy; &nbsp; 2025 &nbsp; <b>IDEO Biuro Rachunowe</b> &nbsp; Wszelkie
          prawa zastrzeżone
        </BottomLine>
      </BlueContainer>
    </FooterContainer>
  );
}

const CardContainer = styled.div`
  margin: 40px;
  padding: 50px 100px;
  font-size: clamp(1rem, 1.7vw, 3rem);
  box-shadow: 10px 0px 8px rgba(0, 0, 0, 0.1);

  width: 32%;
  margin-right: -120px;
  z-index: 1000;
`;

const TextContainer = styled.p`
  color: ${({ theme }) => theme.colors.brightBlue};
  font-size: clamp(1rem, 1.3vw, 2.5rem);
  /* font-size: 1rem; */
`;

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
`;

const BottomLine = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: white;
`;

const LiStyled = styled.li`
  margin: 3px 0;
  font-size: clamp(1rem, 1.2vw, 2rem);
  font-weight: 300;
  color: white;
`;
const TitleColumn = styled.p`
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  font-size: clamp(1rem, 1.4vw, 2.2rem);
`;
const P_Styled = styled.div`
  margin-left: 10px;
  font-size: clamp(1rem, 1.2vw, 2rem);
  font-weight: 300;
  color: white;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  gap: 10px;
  margin: 5px 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 10px 60px 10px;
  margin: 0 10px;
  /* width: 35%; */
  background: rgba(255, 255, 255, 0.1);
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: top;
`;

const BlueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: top;
  margin: 0 0 0 auto;
  padding: 20px;
  padding-left: 100px;
  width: 70%;
  background: linear-gradient(-30deg, #043694, #0072b6);
  position: relative; /* Aby pseudoelementy działały */

  /* Pseudoelementy tworzące podwójny obrys */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Obejmuje całą szerokość */
    height: 100%; /* Obejmuje całą wysokość */
    pointer-events: none; /* Wyłącz interakcje */
    width: calc(100% - 15px);
    height: calc(100% - 15px);
  }

  /* Pierwszy obrys (po lewej i u góry) */
  &::before {
    border-left: 15px solid rgba(255, 255, 255, 0.1);
    border-top: 15px solid rgba(255, 255, 255, 0.1);
    z-index: 1;
  }

  /* Drugi obrys (większy, przesunięty bardziej na zewnątrz) */
  &::after {
    border-left: 30px solid rgba(4, 54, 148, 0.2);
    border-top: 30px solid rgba(4, 54, 148, 0.2);
    transform: translate(-15px, -15px); /* Przesunięcie na zewnątrz */
    z-index: 0;
  }
`;
