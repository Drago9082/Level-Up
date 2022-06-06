import react from "react";
import "./style.css";
import ScriptTag from "react-script-tag";

const MemoryGame = () => {
  return (
    <>
      <div className="wrap">
        <div className="game"></div>

        <div className="modal-overlay">
          <div className="modal">
            <h2 className="winner">You Rock!</h2>
            <button className="restart">Play Again?</button>
            <p className="message">
              Developed on <a href="https://codepen.io">CodePen</a> by{" "}
              <a href="https://codepen.io/natewiley">Nate Wiley</a>
            </p>
            <p className="share-text">Share it?</p>
            <ul className="social">
              <li>
                <a
                  target="_blank"
                  className="twitter"
                  href="https://twitter.com/share?url=https://codepen.io/natewiley/pen/HBrbL"
                >
                  <span className="fa fa-twitter"></span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="facebook"
                  href="https://www.facebook.com/sharer.php?u=https://codepen.io/natewiley/pen/HBrbL"
                >
                  <span className="fa fa-facebook"></span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="google"
                  href="https://plus.google.com/share?url=https://codepen.io/natewiley/pen/HBrbL"
                >
                  <span className="fa fa-google"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <p className="disclaimer">
            All logos are property of their respective owners, No Copyright
            infringement intended.
          </p>
        </footer>
      </div>

      <ScriptTag type="text/javascript" src="./games/memoryGame.js" />
    </>
  );
};

export default MemoryGame;
