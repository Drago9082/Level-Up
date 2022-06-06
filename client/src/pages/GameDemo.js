import React, { useState } from "react";
// import SnakeGame from "../games/SnakeGame";
// import MemoryGame from "../games/MemoryGame";
import { Container, Row, Col, Button } from "react-bootstrap";
import GameLoader from "../components/GameLoader";

const GameDemo = () => {
  const [game, setGame] = useState(null);
  const Games = {
    MemoryGame: require("../games/MemoryGame"),
    SnakeGame: require("../games/SnakeGame"),
  };
  return (
    <Container>
      <Row>
        <Col>
          <GameLoader game={game} />
        </Col>

        <Col>
          <Button onClick={() => setGame(Games["SnakeGame"])}>Snake</Button>
          <Button onClick={() => setGame(Games["MemoryGame"])}>Memory</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GameDemo;
