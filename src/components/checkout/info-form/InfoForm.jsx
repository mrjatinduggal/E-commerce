import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function InfoForm(props) {
  const navigate = useNavigate();

  // Regex validation for inputs
  const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const firstNameRegex = "^[A-Za-z]{1,}[.]{0,1}[A-Za-zs]{0,}$";
  const lastNameRegex = "^[A-Za-z]{1,}[.]{0,1}[A-Za-zs]{0,}$";
  const numberRegex = "^[0-9]*$";

  // state variables for input change
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // states to show validation errors
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState();

  // functions to save input change
  function firstNameChange(e) {
    const firstNameValue = e.target.value;
    setFirstName(firstNameValue);
  }

  function lastNameChange(e) {
    const lastNameValue = e.target.value;
    setLastName(lastNameValue);
  }

  function emailChange(e) {
    const emailValue = e.target.value;
    setEmail(emailValue);
  }

  function phoneNumberChange(e) {
    const phoneNumberValue = e.target.value;
    setPhoneNumber(phoneNumberValue);
  }

  // function to handle submit button click
  function handleClickEvent() {
    if (!firstName.match(firstNameRegex)) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
    if (!lastName.match(lastNameRegex)) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!phoneNumber.match(numberRegex) || phoneNumber === "") {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
    if (
      firstName.match(firstNameRegex) &&
      lastName.match(lastNameRegex) &&
      email.match(emailRegex) &&
      phoneNumber.match(numberRegex)
    ) {
      navigate("/review", {
        state: {
          cart: props.cartData,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
        },
      });
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label className="text-light">First Name</Form.Label>
        <Form.Control
          style={{ border: firstNameError && "red 1px solid" }}
          onChange={firstNameChange}
          type="text"
          placeholder="Enter first name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">Last Name</Form.Label>
        <Form.Control
          style={{ border: lastNameError && "red 1px solid" }}
          onChange={lastNameChange}
          type="text"
          placeholder="Enter last name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">Email address</Form.Label>
        <Form.Control
          style={{ border: emailError && "red 1px solid" }}
          onChange={emailChange}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">Phone Number</Form.Label>
        <Form.Control
          style={{ border: phoneNumberError && "red 1px solid" }}
          onChange={phoneNumberChange}
          type="tel"
          placeholder="Enter phone number"
        />
      </Form.Group>

      <Button onClick={handleClickEvent} variant="primary">
        Submit
      </Button>
    </Form>
  );
}

export default InfoForm;
