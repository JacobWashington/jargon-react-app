import "./Login.css";
import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const { REACT_APP_SERVER_URL } = process.env;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    const payload = { email, password };
    setError(false);
    axios
      .post(`${REACT_APP_SERVER_URL}/users/login`, payload)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("jwtToken", token);

        setAuthToken(token);

        const decoded = jwt_decode(token);

        props.nowCurrentUser(decoded);
        console.log("Login.js - User Info >>>>", response.data.userData);
      })
      .catch((error) => {
        console.log("===> Error on login", error);
        setError(true);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  if (props.user) return <Redirect to="/profile" />;

  return (
    <Form className="login-form shadow">
      <h2>Log In</h2>
      <Form.Group controlId="formGroupEmail" className="form-group">
        <Form.Control
          type="email"
          placeholder="Email"
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
      <Button onClick={submitHandler}>Register</Button>
    </Form>
  );
};

export default Login;
