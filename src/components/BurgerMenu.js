import React, { useState } from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import Hamburger from "hamburger-react";
import { menuData } from "../components/data/menuData";
import { RiInstagramFill } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { StaticImage } from "gatsby-plugin-image";
import ShieldSVG from "../assets/Shield.svg";

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <BurgerWrapper open={isOpen}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={46} distance="sm" />
      </BurgerWrapper>
      <MobileMenu open={isOpen}>
        <MobileContainer>
          <ScrollContainer>
            <MobileTitle to="/">
              <ShieldSVGStyled />
            </MobileTitle>

            <Router>
              <LinkContainer>
                {menuData.map((item, index) => (
                  <MobileLink
                    smooth
                    to={item.link}
                    key={index}
                    onClick={handleClick}
                  >
                    {item.title}
                  </MobileLink>
                ))}
              </LinkContainer>
            </Router>
            <SocialContainer>
              <BsFacebook size="2.7rem" />
              <RiInstagramFill size="3rem" />
            </SocialContainer>
          </ScrollContainer>
        </MobileContainer>
      </MobileMenu>
    </>
  );
}

export default BurgerMenu;

const ShieldSVGStyled = styled(ShieldSVG)`
  width: 250px;
  z-index: 1;
  display: flex;
  justify-content: center;
  justify-self: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

// Mobile Menu
const MobileMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  justify-content: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-30deg, #043694, #0072b6);
  color: white;
  transition: all 0.35s;
  overflow: hidden;
  align-items: center;
  z-index: 250;
  opacity: ${({ open }) => (open ? 1 : 0)};
`;
const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-overflow-scrolling: touch; // mobile safari
  justify-content: space-around;
  overflow-y: scroll;
  align-items: center;
  justify-items: center;
  align-content: center;
  width: 100%;
  z-index: 2;
`;
const ScrollContainer = styled.div`
  height: 70%;
  width: 100%;
  margin-top: 100px;
  text-align: center;
`;

const SocialContainer = styled.div`
  width: 120px;
  display: flex;
  margin: 20px 0;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 1.7rem;
  text-decoration: none;
  width: 100%;
`;

const MobileLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  border-bottom: 1px solid black;
  text-align: center;
  width: 100%;
  padding: 12px;
  :first-child {
    border-top: 1px solid black;
  }
`;
const BurgerWrapper = styled.div`
  display: none;
  @media screen and (max-width: 1390px) {
    display: block;
    top: 30px;
    right: 30px;
    z-index: 300;
    position: fixed;
    color: #fff;
    font-size: 6rem;
    background: rgba(1,25,131, 0.5);
    padding: 5px;
    border-radius: 5px;
    -webkit-tap-highlight-color: transparent;
  }
`;

const MobileTitle = styled.h2`
  font-family: "Oleo Script Swash Caps", cursive;
  color: white;
  font-size: 3rem;
  margin: 20px 0;
`;
