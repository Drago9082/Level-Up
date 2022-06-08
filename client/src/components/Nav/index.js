import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from './LoginForm'
import RegisterForm from "./RegisterForm";


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
          <h1>Level Up!</h1>
        </Link>
      </h1>
      <nav>
      <Button variant="primary" onClick={handleShowReg}>
        Register
      </Button>

      <Modal show={showReg} onHide={handleCloseReg}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <RegisterForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReg}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseReg}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="primary" onClick={handleShowLog}>
        Login
      </Button>

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
