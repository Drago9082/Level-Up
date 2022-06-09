import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameLoader from "../GameLoader";
import globalContext from "../../context/globalContext";
import uuid from "react-uuid";
import shuffle from "../../helpers/shuffle";
import profilePicture from "../../assets/profilepicture.png";
import gameList from "../../helpers/gameList";

import "./style.css";

function Stage() {
  const { user, loggedIn, setLoggedIn } = useContext(globalContext);
  const [Games, setGames] = useState(gameList);
  const [game, setGame] = useState(0);

  useEffect(() => {
    setGames(shuffle(gameList));
  }, []);

  return (
    <>
      <Container fluid id="container">
        <Row>
          <Col
            sm={loggedIn ? 9 : 12}
            md={loggedIn ? 9 : 12}
            lg={loggedIn ? 9 : 12}
            id="game-stage"
          >
            {/* THIS IS WHERE THE GAME COMPONENT WILL GO */}
            <GameLoader id="game-loader" game={Games[game]} />
          </Col>

          {loggedIn ? (
            <Col sm={3} lg={3}>
              <Container id="sidebar-container">
                <Container id="my-profile">
                  <Row>
                    <img id="pfp" src={profilePicture}></img>
                    <h2>{`${user.userName}'s Profile`}</h2>
                    <button id="profile-btns">View Profile</button>
                    <button id="profile-btns">Edit Profile</button>
                  </Row>
                </Container>
                <Container id="favourite-games">
                  <Row>
                    <h2>Favourite Games</h2>
                  </Row>
                </Container>
              </Container>
            </Col>
          ) : (
            <></>
          )}
        </Row>
        <Row>
          <Col
            sm={loggedIn ? 9 : 12}
            md={loggedIn ? 9 : 12}
            lg={loggedIn ? 9 : 12}
            id="game-list"
          >
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
