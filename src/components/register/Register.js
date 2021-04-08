import "./Register.css";

import { useState, useEffect } from "react";
import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const { REACT_APP_SERVER_URL } = process.env;

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    console.log("SUBMIT FIRING");
    event.preventDefault();
    setError(false);

    if (firstName && lastName && email && password && confirmPassword) {
      console.log("3rd");
      if (password === confirmPassword && password.length >= 8) {
        console.log("HI THERE!");
        let payload = {
          firstName,
          lastName,
          email,
          password,
        };
        axios
          .post(`${REACT_APP_SERVER_URL}/users/register`, payload)
          .then((response) => {
            console.log("===> Yay, new user");
            console.log(response);
            setRedirect(true);
          })
          .catch((err) => {
            console.log(err);
            setError(true);
          });
      } else setError(true);
    } else setError(true);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (redirect) return <Redirect to="/profile" />;

  return (
    <>
      <Form className="register-form shadow">
        <h2>Register</h2>
        <Form.Group controlId="formGroupFirstName" className="form-group">
          <Form.Control
            type="text"
            placeholder="First Name"
            className={`form-control ${error ? "error" : ""}`}
            onChange={handleFirstName}
          />
        </Form.Group>
        <Form.Group controlId="formGroupLastName" className="form-group">
          <Form.Control
            type="text"
            placeholder="Last Name"
            className={`form-control ${error ? "error" : ""}`}
            onChange={handleLastName}
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail" className="form-group">
          <Form.Control
            type="email"
            placeholder="Enter email"
            className={`form-control ${error ? "error" : ""}`}
            onChange={handleEmail}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword" className="form-group">
          <Form.Control
            type="password"
            placeholder="Password"
            className={`form-control ${error ? "error" : ""}`}
            onChange={handlePassword}
          />
        </Form.Group>
        <Form.Group controlId="formGroupConfirmPassword" className="form-group">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            className={`form-control ${error ? "error" : ""}`}
            onChange={handleConfirmPassword}
          />
        </Form.Group>
        <Button onClick={submitHandler}>Register</Button>
      </Form>
    </>
  );
};

export default Register;
