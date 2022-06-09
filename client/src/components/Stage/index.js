import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameLoader from "../GameLoader";
import globalContext from "../../context/globalContext";
import uuid from "react-uuid";
import shuffle from "../../helpers/shuffle";

import "./style.css";

function Stage() {
  const { user } = useContext(globalContext);
  const Games = shuffle([
    { path: "snake-game", name: "Snake", author: "" },
    {
      path: "hangman",
      name: "Hangman",
      author: "",
    },
    { path: "color-match", name: "Color Match", author: "" },
    { path: "fruit-ninja", name: "Fruit Ninja", author: "" },
  ]);
  const [game, setGame] = useState(0);

  return (
    <>
      <Container fluid id="container">
        <Row>
          <Col sm={9} md={9} lg={9} id="game-stage">
            {/* THIS IS WHERE THE GAME COMPONENT WILL GO */}
            <GameLoader id="game-loader" game={Games[game]} />
          </Col>

          <Col sm={3} lg={3}>
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
          <Col sm={9} md={9} lg={9} id="game-list">
            {Games.map((g, i) => (
              <GameIcon
                key={uuid()}
                game={g}
                index={i}
                setGame={setGame}
                currentGame={game}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

const GameIcon = ({ game, index, currentGame, setGame }) => {
  const { path, name, author } = game;
  const highlightColor = index === currentGame ? "#ff8800" : "#333";
  return (
    <div
      className="game-icon"
      style={{
        borderColor: highlightColor,
      }}
      onClick={() => setGame(index)}
    >
      <p style={{ background: highlightColor }}>{name}</p>
      <div
        style={{
          backgroundImage: `url(games/${path}/icon.png)`,
        }}
      ></div>
    </div>
  );
};
export default Stage;
