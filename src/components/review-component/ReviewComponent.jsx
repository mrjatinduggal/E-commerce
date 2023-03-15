import React from "react";
import Form from "react-bootstrap/Form";

function ReviewComponent(props) {
  const [firstName, lastName, email, phoneNumber] = props.userInfo;

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label className="text-light">First Name</Form.Label>
        <h6 className="text-light">{firstName}</h6>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">Last Name</Form.Label>
        <h6 className="text-light">{lastName}</h6>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">Email address</Form.Label>
        <h6 className="text-light">{email}</h6>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">Phone Number</Form.Label>
        <h6 className="text-light">{phoneNumber}</h6>
      </Form.Group>
    </Form>
  );
}

export default ReviewComponent;
