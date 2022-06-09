import axios from "axios";
import React, { useContext, useState } from "react";
import globalContext from "../../context/globalContext";
import { useNavigate } from "react-router-dom";
import { Button, Modal, CloseButton } from "react-bootstrap";
import "./style.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      console.log(user);
      await getLogged();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <form onSubmit={login}>
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
        <button id="submitBtn" type="submit">
          Login
        </button>
        {/* <button id = "forgotPasswordBtn" type="submit">Forgot Password?</button> */}
      </form>
    </div>
  );
}

export default LoginForm;
