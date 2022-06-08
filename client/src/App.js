import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { AuthContext } from './context/Auth.js';

//need this to set cookies
axios.defaults.withCredentials = true;

function App() {
  return (
    //We set the router in the authContext to provide context...
    <AuthContext>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
 </AuthContext>
  );
}

export default App;

