import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Presentation } from "./pages/Presentation";
// import { AuthContext } from "./context/Auth.js";
import globalContext from "./context/globalContext";

//need this to set cookies
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  function (config) {
    // Update token before most requests
    const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

    if (!config || !config.url) return;
    if (!config.url.startsWith("http")) config.url = baseUrl + config.url;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

function App() {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [user, setUser] = useState({});

  async function getLogged() {
    const loggedResponse = await axios.get("/api/user/loggedIn");
    setLoggedIn(loggedResponse.data);
  }

  useEffect(() => {
    getLogged();
  }, []);

  return (
    //We set the router in the authContext to provide context...
    <globalContext.Provider
      value={{ loggedIn, getLogged, setLoggedIn, user, setUser }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </globalContext.Provider>
  );
}

export default App;
