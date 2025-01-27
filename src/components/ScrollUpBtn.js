import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  right: -100px;
  bottom: 150px;
  transition: right 0.5s;
  cursor: pointer;
  background-color: yellow;
  font-size: 30px;
  padding: 10px;
  min-width: 65px;
  min-height: 65px;
  border-radius: 35px;
  background: red;
  color: red;
`;

const StyledTransition = styled.div`
  right: 20px;
`;

function ScrollUpBtn() {
  return (
    <ScrollUpButton
      ContainerClassName={StyledContainer.styledComponentId}
      TransitionClassName={StyledTransition.styledComponentId}
      EasingType="linear"
    />
  );
}

export default ScrollUpBtn;
