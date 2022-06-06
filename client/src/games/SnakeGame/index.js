import react from "react";
import "./style.css";
import ScriptTag from "react-script-tag";

const SnakeGame = () => {
  return (
    <>
      <h1>Game Demo here</h1>
      <div className="score">0</div>
      <div className="stage"></div>
      <ScriptTag type="text/javascript" src="./games/snakeGame.js" />
    </>
  );
};

export default SnakeGame;
