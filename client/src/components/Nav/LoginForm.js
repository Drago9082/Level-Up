import axios from "axios";
import React, { useContext, useState } from "react";

import globalContext from "../../context/globalContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLogged, user, setUser } = useContext(globalContext);

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
      <h1>Login</h1>
      <form onSubmit={login}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
