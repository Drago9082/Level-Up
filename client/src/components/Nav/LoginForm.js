import axios from "axios";
import React, { useContext, useState } from "react";
import globalContext from "../../context/globalContext";
import { useNavigate } from "react-router-dom";
import { Button, Modal, CloseButton, Alert } from "react-bootstrap";
import "./style.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const { getLogged, setUser } = useContext(globalContext);

  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    try {
      const userLoginData = {
        email,
        password,
      };


      let { data: user } = await axios.post("/api/user/login", userLoginData);
      //watch the frick out if you dont pass validation on the password it just fails..
      setUser(user);
      await getLogged();
      navigate("/");
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
      <form onSubmit={login}>
        <input
          id="email"
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
          id="password"
          className="form-fields"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            setShowAlert(false);
          }}
          value={password}
        />
        <button id="submitBtn" type="submit">
          Login
        </button>
        {/* <button id = "forgotPasswordBtn" type="submit">Forgot Password?</button> */}
      </form>
    </div>
  );
}

export default LoginForm;
