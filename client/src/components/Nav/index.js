import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./style.css";

function Nav() {
  const [showReg, setShowReg] = useState(false);

  const handleCloseReg = () => setShowReg(false);
  const handleShowReg = () => setShowReg(true);

  const [showLog, setShowLog] = useState(false);

  const handleCloseLog = () => setShowLog(false);
  const handleShowLog = () => setShowLog(true);

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
        <div id="user-buttons">
          <button onClick={handleShowReg} id="modal-buttons">Register</button>
          <button onClick={handleShowLog} id="modal-buttons">Login</button>
        </div>
        <RegisterForm show={showReg} onHide={handleCloseReg} />

        <Modal show={showLog} onHide={handleCloseLog}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLog}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseLog}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </nav>
    </header>
  );
}

export default Nav;
