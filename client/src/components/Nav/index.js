import React, { useState, useContext } from "react";
import { Button, Modal, CloseButton } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import globalContext from "../../context/globalContext";
import LoggedOutNav from "./LoggedOutNav";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./style.css";

function Nav() {
  const { loggedIn } = useContext(globalContext)
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <h1 id="logo">
            <span id="gold">L</span>evel <span id="gold">U</span>p!
          </h1>
        </Link>
      </h1>
      <LoggedOutNav/>
    </header>
  );
}

export default Nav;
