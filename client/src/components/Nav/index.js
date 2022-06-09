import React, { useState, useContext } from "react";
import globalContext from "../../context/globalContext";
import { Button, Modal, CloseButton } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LoggedOutNav from "./LoggedOutNav";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import "./style.css";

function Nav() {
  const { user, loggedIn, setLoggedIn } = useContext(globalContext);
  const [showReg, setShowReg] = useState(false);

  const handleCloseReg = () => setShowReg(false);
  const handleShowReg = () => setShowReg(true);

  const [showLog, setShowLog] = useState(false);

  const handleCloseLog = () => setShowLog(false);
  const handleShowLog = () => setShowLog(true);
  async function handleLogout() {
    try {
      setLoggedIn(false);
      await axios.get("/api/user/logout");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <h1 id="logo">
            <span id="gold">L</span>evel <span id="gold">U</span>p!
          </h1>
        </Link>
      </h1>
      <nav>
        <a href="/presentation">
          <button id="present-btn">View Presentation</button>
        </a>
        {!loggedIn ? (
          <div id="user-buttons">
            <button onClick={handleShowReg} id="modal-buttons">
              Register
            </button>
            <button onClick={handleShowLog} id="modal-buttons">
              Login
            </button>
          </div>
        ) : (
          <div id="user-buttons">
            <button onClick={handleLogout} id="modal-buttons">
              Log Out
            </button>
          </div>
        )}
        <RegisterForm
          show={showReg}
          onHide={handleCloseReg}
          setShowReg={setShowReg}
        />

        <Modal id="modal-header" show={showLog} onHide={handleCloseLog}>
          <Modal.Header id="modal-title">
            <Modal.Title>Modal heading</Modal.Title>
            <CloseButton variant="white" />
          </Modal.Header>
          <Modal.Body id="modal-body">
            <LoginForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLog}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </nav>
    </header>
  );
}

export default Nav;
