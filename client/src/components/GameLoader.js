import react from "react";
//import "./style.css";
import ScriptTag from "react-script-tag";

const GameLoader = ({ game }) => {
  if (game) {
    let Component = game.default;
    return <Component />;
  }

  return <h1>No Game Selected</h1>;
};

export default GameLoader;
