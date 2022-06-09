import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GameLoader from "../GameLoader";
import globalContext from "../../context/globalContext";
import uuid from "react-uuid";

import "./style.css";

function Stage() {
  const { user } = useContext(globalContext);
  const Games = [
    { path: "snake-game", name: "Snake", author: "" },
    {
      path: "hangman",
      name: "Snake",
      author: "",
    },
  ];
  const [game, setGame] = useState(Games[0]);

  const handleSetGame = (i) => setGame(Games[i]);

  return (
    <>
      <Container fluid id="container">
        <Row>
          <Col sm={8} md={8} lg={8} id="game-stage">
            {/* THIS IS WHERE THE GAME COMPONENT WILL GO */}
            <GameLoader id="game-loader" game={game} />
          </Col>

          <Col sm={4} lg={4}>
            <Container id="sidebar-container">
              <Container id="my-profile">
                <Row>
                  <h2>{`${user.userName ? user.userName : "My"} Profile`}</h2>
                </Row>
              </Container>
              <Container id="favourite-games">
                <Row>
                  <h2>Favourite Games</h2>
                </Row>
              </Container>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col sm={8} md={8} lg={8} id="game-list">
            {Games.map((g, i) => (
              <GameIcon
                key={uuid()}
                game={g}
                index={i}
                setGame={handleSetGame}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

const GameIcon = ({ game, index, setGame }) => {
  const { path, name, author } = game;
  return (
    <div
      className="game-icon"
      style={{ backgroundImage: `url(games/${path}/icon.png)` }}
      onClick={() => setGame(index)}
    ></div>
  );
};
export default Stage;
