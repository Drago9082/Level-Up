import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameLoader from "../GameLoader";
import globalContext from "../../context/globalContext";
import uuid from "react-uuid";
import shuffle from "../../helpers/shuffle";
import profilePicture from "../../assets/profilepicture.png";
import gameList from "../../helpers/gameList";
import GameIcon from "../GameIcon";
import loadingGif from "../../assets/spinner.gif";

import "./style.css";
import axios from "axios";
import FavGameIcon from "../FavGameIcon";

function Stage() {
  const { user, loggedIn, setLoggedIn } = useContext(globalContext);
  const [Games, setGames] = useState(gameList);
  const [game, setGame] = useState(0);
  const [loading, setLoading] = useState(true);

  const getGames = async () => {
    let { data } = await axios.post("/api/game/gamelist");
    console.log(data.game);
    return data.game;
  };

  useEffect(() => {
    getGames().then((games) => {
      setGames(shuffle(games));

      setLoading(false);
    });
  }, []);
  if (loading) return <img src={loadingGif} />;
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
                    <Col>
                      <h2>Favourite Games</h2>
                      <div className="favorite-games-list">
                        {user?.games?.length === 0 ? (
                          <p>
                            You have no favorite games. Go ahead and add some!
                          </p>
                        ) : (
                          user.games.map((g, i) => (
                            <FavGameIcon
                              key={uuid()}
                              game={g}
                              index={i}
                              setGame={setGame}
                              currentGame={game}
                            />
                          ))
                        )}
                      </div>
                    </Col>
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

export default Stage;
