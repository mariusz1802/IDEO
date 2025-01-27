import React from "react";
import Styled from "styled-components";
import ButtonNavbar from "./ButtonNavbar";
import { menuData, labelData } from "./data/menuData";
import LabelButton from "./LabelButton";
import ShieldSVG from "../assets/Shield.svg";

function Navbar() {
  const firstHalf = labelData.slice(0, Math.ceil(labelData.length / 2));
  const secondHalf = labelData.slice(Math.ceil(labelData.length / 2));

  return (
    <>
      <Container>
        {menuData.map((item, index) => (
          <>
            <ButtonNavbar key={index} to={item.link} title={item.title} />
            {index === 2 && <ShieldSVGStyled />}
          </>
        ))}
      </Container>
      <InfoBelt>
        <PairLabels>
          {firstHalf.map((item, index) => (
            <LabelButton
              key={index}
              icon={item.icon}
              text={item.title}
              link={item.link}
              altText={item.title}
              target={item.target}
            />
          ))}
        </PairLabels>
        <PairLabels>
          {secondHalf.map((item, index) => (
            <LabelButton
              key={index}
              icon={item.icon}
              text={item.title}
              link={item.link}
              altText={item.title}
            />
          ))}
        </PairLabels>
      </InfoBelt>
    </>
  );
}

export default Navbar;

const Container = Styled.div`
    background: linear-gradient(#0072B6, #043694);
    height: 100px;
    width: 100%;
    min-width: 600px;
    display: flex; 
    justify-content: center;
    align-items: start; 
`;

const InfoBelt = Styled.div`
    height: 42px;
    margin: 0 auto;
    min-width: 1000px;
    display: flex; 
    align-items: center;
    justify-content: space-around;
    gap: 350px;
    align-items: start; 
    @media screen and (max-width: 1180px){
      display:none;
    }
`;

const PairLabels = Styled.div`
display: flex;
flex-direction: row;
height:100%;
`;

const ShieldSVGStyled = Styled(ShieldSVG)`
width: 315px;
z-index: 1;
`;
