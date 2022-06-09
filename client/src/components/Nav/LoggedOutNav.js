import React, { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./style.css";



const LoggedOutNav = () => {

    const [showReg, setShowReg] = useState(false);

    const handleCloseReg = () => setShowReg(false);
    const handleShowReg = () => setShowReg(true);

    const [showLog, setShowLog] = useState(false);

    const handleCloseLog = () => setShowLog(false);
    const handleShowLog = () => setShowLog(true);


  return (
    <nav>
    <div id="user-buttons">
      <button onClick={handleShowReg} id="modal-buttons">Register</button>
      <button onClick={handleShowLog} id="modal-buttons">Login</button>
    </div>
    <RegisterForm show={showReg} onHide={handleCloseReg} />

    <Modal id="modal-header" show={showLog} onHide={handleCloseLog}>
      <Modal.Header id="modal-header">
        <Modal.Title id="modal-title-log">Login</Modal.Title>

      </Modal.Header>
      <Modal.Body id="modal-body">
        <LoginForm />
      </Modal.Body>
    </Modal>
  </nav>
  );
};

export default LoggedOutNav;