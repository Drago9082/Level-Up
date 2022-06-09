import react, { useRef, useState, useEffect } from "react";

const GameLoader = ({ game }) => {
  const frameRef = useRef(null);
  let { path, name, author } = game;
  const [startGame, setStartGame] = useState(false);

  function resizeIframe() {
    frameRef.current.style.height =
      frameRef.current.contentWindow.document.documentElement.scrollHeight +
      "px";
    frameRef.current.style.width =
      frameRef.current.contentWindow.document.documentElement.scrollWidth +
      "px";
  }

  useEffect(() => {
    setStartGame(false);
  }, [game]);

  if (!startGame)
    return (
      <div style={{ textAlign: "center" }}>
        <h1
          style={{ color: "white", margin: "1.5rem" }}
        >{`Ready to play ${name}?`}</h1>
        <button onClick={() => setStartGame(true)}>Start Game</button>
      </div>
    );

  return (
    <iframe
      ref={frameRef}
      id="game-container"
      onLoad={resizeIframe}
      src={`games/${path}/index.html`}
    />
  );
};

export default GameLoader;
