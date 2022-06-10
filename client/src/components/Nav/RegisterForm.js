import axios from "axios";
import React, { useContext, useState } from "react";
import globalContext from "../../context/globalContext";
import { useNavigate } from "react-router-dom";
import { Button, Modal, CloseButton, Alert } from "react-bootstrap";
import "./style.css";

function RegisterForm(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
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
      setShowAlert(true);
      setAlertText(err.response.data.errorMessage);
      console.error(err);
      console.log(err.response);
    }
  }
  return (
    <div>
      <Alert
        show={showAlert}
        variant="secondary"
        style={{ textAlign: "center", padding: "0", paddingTop: "1rem" }}
      >
        <p>{alertText}</p>
      </Alert>

      <form onSubmit={register}>
        <input
          className="form-fields"
          type="name"
          placeholder="User Name"
          onChange={(e) => {
            setUserName(e.target.value);
            setShowAlert(false);
          }}
          value={userName}
        />
        <input
          className="form-fields"
          type="email"
          placeholder="Email"
          //when a letter is put in as an email
          onChange={(e) => {
            setEmail(e.target.value);
            setShowAlert(false);
          }}
          //it respons by changing the value to what ever has been put in so far
          value={email}
        />
        <input
          className="form-fields"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            setShowAlert(false);
          }}
          value={password}
        />
        <input
          className="form-fields"
          type="password"
          placeholder="Verify your password"
          onChange={(e) => {
            setPasswordVerify(e.target.value);
            setShowAlert(false);
          }}
          value={passwordVerify}
        />
        <button id="submitBtn" type="submit" onSubmit={register}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
