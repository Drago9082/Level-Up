import axios from "axios";
import React, { useContext, useState } from "react";
import globalContext from "../../context/globalContext";
import { useNavigate } from "react-router-dom";
import { Button, Modal, CloseButton } from "react-bootstrap";
import "./style.css";

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

      console.log("signup data:", userSignUpData);
      await axios.post("/api/user/signup", userSignUpData);
      //watch the frick out if you dont pass validation on the password it just fails..
      await getLogged();
    } catch (err) {
      console.error(err);
      console.log(err.response);
    }
  }
  return (
    <Modal
      {...props}
      style={{
        position: "centered",
      }}
    >
      <Modal.Header id="modal-header">
        <Modal.Title id="modal-title-reg">Register a new account</Modal.Title>
      </Modal.Header>
      <Modal.Body id="modal-body">
        <form onSubmit={register}>
          <input
            id="form-fields"
            type="name"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <input
            id="form-fields"
            type="email"
            placeholder="Email"
            //when a letter is put in as an email
            onChange={(e) => setEmail(e.target.value)}
            //it respons by changing the value to what ever has been put in so far
            value={email}
          />
          <input
            id="form-fields"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            id="form-fields"
            type="password"
            placeholder="Verify your password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
          <button id="submitBtn" type="submit" onSubmit={register}>
            Register
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterForm;
