import react, { useRef, useEffect } from "react";
//import "./style.css";
import ScriptTag from "react-script-tag";

const GameLoader = ({ game }) => {
  const frameRef = useRef(null);
  const { url, name, author } = game;

  function resizeIframe() {
    frameRef.current.style.height =
      frameRef.current.contentWindow.document.documentElement.scrollHeight +
      "px";
    frameRef.current.style.width =
      frameRef.current.contentWindow.document.documentElement.scrollWidth +
      "px";
  }
  useEffect(() => {}, []);

  return (
    <iframe
      ref={frameRef}
      id="game-container"
      onLoad={resizeIframe}
      src={url}
    />
  );
};

export default GameLoader;
