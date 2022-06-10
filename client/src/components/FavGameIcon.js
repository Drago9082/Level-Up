import react, { useState, useEffect, useContext } from "react";
import globalContext from "../context/globalContext";
import { Star, StarFill } from "react-bootstrap-icons";

const FavGameIcon = ({ game, index, currentGame, setGame }) => {
  const { user } = useContext(globalContext);
  const { path, name, author } = game;

  const highlightColor = game._id === currentGame._id ? "#ff8800" : "#333";

  return (
    <div
      className="game-icon fav-game-icon"
      style={{
        borderColor: highlightColor,
      }}
    >
      <div
        className="game-icon-body"
        onClick={() => setGame(index)}
        style={{
          backgroundImage: `url(games/${path}/icon.png)`,
        }}
      ></div>
    </div>
  );
};

export default FavGameIcon;
