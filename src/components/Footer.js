import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ButtonImage } from "./CennikSecition";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { menuData } from "./data/menuData";
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
            <LogoWrapper>
              <StaticImage src="../assets/Logo.svg" alt="IDEO_Logo" />
            </LogoWrapper>
            <TitleColumn>Kontakt:</TitleColumn>
            <P_Styled>
              Potrzebujesz więcej informacji? Chętnie odpowiemy na każde
              twoje pytanie. Dzwoń lub pisz!{" "}
            </P_Styled>

            <div>
              <Row>
                <FaPhoneAlt color="white" font-size="1.8rem" />

                <P_Styled>
                  <A href="tel:+48790578923">+48 790 578 923</A>
                </P_Styled>
              </Row>
              <Row>
                <IoMail color="white" font-size="2rem" padding="0" margin="0" />
                <P_Styled>
                  <A href="mailto: biuro@ideo.info.pl">biuro@ideo.info.pl</A>
                </P_Styled>
              </Row>
            </div>
          </Column>
          <Column>
            <TitleColumn>Nawigacja:</TitleColumn>
            <ul>
              {menuData.map((item, index) => (
                <LiStyled key={index}>
                  <AnchorLink to={item.link} title={item.title} />
                </LiStyled>
              ))}
            </ul>
          </Column>
          <Column>
            <TitleColumn>Certyfikat:</TitleColumn>
            <ButtonImageStyled
              href="https://www.cik.org.pl/biuro/ideo-marta-szkatulska-94918"
              target="_blank"
            >
              <StaticImage
                src="../assets/CIK_footer_btn.png"
                alt="Przycisk_CIK"
              />
            </ButtonImageStyled>
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

const LogoWrapper = styled.div`
display: none;
@media screen and (max-width: 800px){
  margin-bottom: 20px;
  width: 60%;
  display: flex;
  color: white;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

}
  

`;

const A = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonImageStyled = styled(ButtonImage)`
  width: 195px;
`;

const CardContainer = styled.div`
  position: absolute; /* Wyjmij z normalnego przepływu */
  padding: 30px 100px;
  margin: 20px;
  bottom: 0;
  font-size: clamp(1rem, 1.7vw, 3rem);
  box-shadow: 10px 10px 10px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Zapewnij, że będzie nad innymi elementami */
  background-color: white; /* Dodaj tło, aby wyróżnić treść */
  width: 32%;
  @media screen and (max-width: 1000px) {
    padding: 10px 10px;
    width: 30%;
    bottom: 100px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const TextContainer = styled.p`
  color: ${({ theme }) => theme.colors.brightBlue};
  font-size: clamp(1rem, 1.3vw, 2.5rem);
`;

export default Footer;

const FooterContainer = styled.div`
  position: relative; /* Ważne dla pozycji absolutnej dzieci */
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BottomLine = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: white;
  @media screen and (max-width: 800px) {
    justify-content: center;
    font-size: 0.7rem;
    margin-top: 20px;
  }
`;

const LiStyled = styled.li`
  margin: 3px 0;
  font-size: clamp(1rem, 1.2vw, 2rem);
  font-weight: 300;
  color: white;
  :hover {
    text-decoration: underline;
  }
`;
const TitleColumn = styled.p`
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  font-size: clamp(1rem, 1.4vw, 2.2rem);
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
const P_Styled = styled.div`
  margin-left: 10px;
  font-size: clamp(1rem, 1.2vw, 2rem);
  font-weight: 300;
  color: white;
  @media screen and (max-width: 800px) {
    margin: 5px 0;
  }
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
  margin: 0 10px;
  border-right: 1px solid white;
  padding: 10px 10px 60px 10px;
  @media screen and (max-width: 1000px) {
    &:nth-child(2) {
      display: none;
      margin: 0 5px;
    }
    @media screen and (max-width: 800px) {
      border-right: none;
      margin: 0;
      padding: 5px 5px 5px 5px;
      align-items: center;
    }
  }
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: top;
  :last-child {
    border-right: none;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
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
  position: relative;
  z-index: 0;
  background: linear-gradient(-30deg, #043694, #0072b6);

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
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 100px;
    padding-left: 20px;
  }
`;
