import axios from "axios";
import React, { useContext, useState } from "react";
import globalContext from "../../context/globalContext";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function RegisterForm(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const { getLogged } = useContext(globalContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    try {
      const userSignUpData = {
        userName,
        email,
        password,
        passwordVerify,
      };
      await axios.post("/api/user/signup", userSignUpData);
      //watch the frick out if you dont pass validation on the password it just fails..
      await getLogged();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>
          <p>Register a new account</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={register}>
          <input
            type="name"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <input
            type="email"
            placeholder="Email"
            //when a letter is put in as an email
            onChange={(e) => setEmail(e.target.value)}
            //it respons by changing the value to what ever has been put in so far
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="password"
            placeholder="Verify your password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
          <button type="submit">Register</button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterForm;
