import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { ModalContent } from "./ModalForm";
import CloseButton from "react-bootstrap/CloseButton";


function ModalBootstrap({ show, handleClose, desc, title }) {
  return (
    <StyledModal
      show={show}             // Prop show bezpośrednio do Modal
      onHide={handleClose} 
      centered
    >
      <ModalContentStyled>
        <ModalHeader>
          <Title>{title}</Title>
          <CloseButton variant="white" onClick={handleClose} />
        </ModalHeader>
        <Modal.Body style={{ color: "black" }}>
          <Wrapper>
            <BsFillCheckCircleFill
              style={{
                color: "#00d504",
                fontSize: "3.2rem",
                marginRight: "10px",
                filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
              }}
            />
            <Text>{desc}</Text>
          </Wrapper>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Zamknij
          </Button>
        </Modal.Footer>
      </ModalContentStyled>
    </StyledModal>
  );
}

ModalBootstrap.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  desc: PropTypes.string,
  title: PropTypes.string,
};

export default ModalBootstrap;

// Styled-components for modal

const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 20px;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: ${({ show }) => (show ? 1 : 0)};
    transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-20px)")};
  }
`;

const ModalHeader = styled(Modal.Header)`
  color: #9a9797;
  background: rgba(255, 255, 255, 0.2);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ModalContentStyled = styled(ModalContent)`
  color: white;
  border: 5px solid white;
  margin: auto;
`;

const Text = styled.span`
  font-size: 1.3rem;
  color: white;
`;

const Title = styled.span`
  font-size: 1.6rem;
  color: #eeeeee;
`;
