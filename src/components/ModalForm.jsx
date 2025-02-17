import React from "react";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "./ContactForm";

function ModalForm(props) {
  return (
    <ModalStyled
      animation={false}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalContent>
        <Modal.Header>
          <CloseButton variant="white" onClick={props.onHide} />
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={props.onHide}>
            Zamknij
          </Button>
        </Modal.Footer>
      </ModalContent>
    </ModalStyled>
  );
}

ModalForm.propTypes = {
  onHide: PropTypes.func,
};

export default ModalForm;

 const ModalContent = styled.div`
  background: linear-gradient(to left, #011983, #01B7FF);
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 20px;
`;

const ModalStyled = styled(Modal)`
  .modal-content {
    border-radius: 20px;
  }
`;

export { ModalContent };
