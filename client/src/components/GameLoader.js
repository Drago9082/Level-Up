import react from "react";
//import "./style.css";
import ScriptTag from "react-script-tag";

const GameLoader = ({ game }) => {
  return <iframe id="game-container" src="games/snake-game/index.html" />;
};

export default GameLoader;
