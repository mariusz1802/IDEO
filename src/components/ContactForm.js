// Importy
import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 4px solid #9b9b9b;
  border-radius: 0;
  outline: none;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-bottom-color: #011882;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 4px solid #9b9b9b;
  border-radius: 0;
  outline: none;
  font-size: 16px;
  resize: none;
  height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    border-bottom-color: #011882;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: #011882;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #010b5e;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: -10px 0 10px 0;
`;

// Komponent formularza
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Imię jest wymagane.";
    if (!formData.email || !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email))
      newErrors.email = "Podaj poprawny email.";
    if (!formData.phone || !/^\d{9}$/.test(formData.phone))
      newErrors.phone = "Podaj poprawny numer telefonu (9 cyfr).";
    if (!formData.message) newErrors.message = "Wiadomość jest wymagana.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Wysłanie danych do Getform.io
    fetch("https://getform.io/f/YOUR_GETFORM_ENDPOINT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Formularz został wysłany!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      })
      .catch(() => {
        alert("Wystąpił błąd podczas wysyłania formularza.");
      });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Imię*"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </div>

      <div>
        <Input
          type="text"
          name="phone"
          placeholder="Telefon*"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
      </div>

      <div>
        <TextArea
          name="message"
          placeholder="Wiadomość*"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </div>

      <SubmitButton type="submit">Wyślij</SubmitButton>
    </FormWrapper>
  );
};

export default ContactForm;
