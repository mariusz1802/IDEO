import React from "react";
import Styled from "styled-components";
import ButtonNavbar from "./ButtonNavbar";
import { menuData } from "./data/menuData";
import Shield from "../images/Shield.png";
import LabelButton from "./LabelButton";

const Container = Styled.div`
    background: linear-gradient(#155E98, #071F32);
    height: 124px;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: start; 
`;

const InfoBelt = Styled.div`
    background: lightgrey;
    height: 42px;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: start; 
`;

function Navbar() {
  return (
    <>
      <Container>
        {menuData.map((item, index) => (
          <>
            <ButtonNavbar key={index} to={item.link} title={item.title} />
            {index === 2 && <img src={Shield} alt="shield" />}
          </>
        ))}
      </Container>
      <InfoBelt>
        </InfoBelt>
    </>
  );
}

export default Navbar;
