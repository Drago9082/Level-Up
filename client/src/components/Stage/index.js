import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GameLoader from "../GameLoader";
import globalContext from "../../context/globalContext";

import "./style.css";

function Stage() {
  const { user } = useContext(globalContext);
  const Games = {
    MemoryGame: require("../../games/MemoryGame"),
    SnakeGame: require("../../games/SnakeGame"),
  };
  const [game, setGame] = useState(Games["SnakeGame"]);

  return (
    <>
      <Container fluid id="container">
        <Row>
          <Col sm={8} md={8} lg={8} id="game-stage">
            {/* THIS IS WHERE THE GAME COMPONENT WILL GO */}
            <GameLoader game={game} />
          </Col>

          <Col sm={4} lg={4}>
            <Container>
              <Container id="my-profile">
                <Row>
                  <h1>{`${user.userName ? user.userName : "My"} Profile`}</h1>
                </Row>
              </Container>
              <Container id="favourite-games">
                <Row>
                  <h1>Favourite Games</h1>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <button
                      key={"btnSnake"}
                      onClick={() => setGame(Games["SnakeGame"])}
                    >
                      Snake
                    </button>

                    <button
                      key={"btnMemory"}
                      onClick={() => setGame(Games["MemoryGame"])}
                    >
                      Memory
                    </button>
                  </div>
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
