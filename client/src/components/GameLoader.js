import react from "react";
//import "./style.css";
import ScriptTag from "react-script-tag";

const GameLoader = ({ game }) => {
  const { url, name, author } = game;
  return <iframe id="game-container" src={url} />;
};

export default GameLoader;
