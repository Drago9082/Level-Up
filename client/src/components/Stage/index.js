import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./style.css";

function Stage() {
  return (
    <>
      <Container fluid id="container">
        <Row>
          <Col id="game-stage">
            <h1>Game Stage</h1>
            {/* THIS IS WHERE THE GAME COMPONENT WILL GO */}
          </Col>
          <Col lg="4">
            <Container>
              <Container id="my-profile">
                <Row>
                  <h1>My Profile</h1>
                </Row>
              </Container>
              <Container id="favourite-games">
                <Row>
                  <h1>Favourite Games</h1>
                </Row>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Stage;
