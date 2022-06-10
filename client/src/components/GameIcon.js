import react, { useState, useEffect, useContext } from "react";
import globalContext from "../context/globalContext";
import { Star, StarFill } from "react-bootstrap-icons";
import axios from "axios";

const GameIcon = ({ game, index, currentGame, setGame }) => {
  const { user } = useContext(globalContext);
  const { path, name, author } = game;
  const [selected, setSelected] = useState(false);
  const highlightColor = index === currentGame ? "#ff8800" : "#333";

  const handleSetSelected = async () => {
    let toggled = !selected;
    setSelected(toggled);
    if (toggled) {
      try {
        let response = await axios.post(
          `/api/user/${user._id}/games/${game._id}`
        );
        console.log(response);
      } catch (err) {
        console.log("err adding favorite:", err);
      }
    } else {
      try {
        let response = await axios.delete(
          `/api/user/${user._id}/games/${game._id}`
        );
        console.log(response);
      } catch (err) {
        console.log("err removing favorite:", err);
      }
    }
  };

  useEffect(() => {
    if (user?.games) {
      user.games.map((g) => (g === game._id ? setSelected(true) : null));
    }
  });

  return (
    <div
      className="game-icon"
      style={{
        borderColor: highlightColor,
      }}
    >
      <p style={{ background: highlightColor, position: "relative" }}>
        {name}
        <span
          style={{ display: user?.games ? "block" : "none" }}
          className="star-container"
          onClick={handleSetSelected}
        >
          {selected ? (
            <StarFill color={"#ff8800"} />
          ) : (
            <Star color={"#ff8800"} />
          )}
        </span>
      </p>

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

export default GameIcon;
