const axios = require("axios");
const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/LevelUpDB";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { Game } = require("../models");

const games = [
  { path: "snake-game", name: "Snake", author: "" },
  {
    path: "hangman",
    name: "Hangman",
    author: "",
  },
  { path: "color-match", name: "Color Match", author: "" },
  { path: "fruit-ninja", name: "Fruit Ninja", author: "" },
  { path: "minesweeper", name: "Minesweeper", author: "" },
  { path: "brick-breaker", name: "Brick Breaker", author: "" },
  { path: "pinball", name: "Pinball", author: "" },
];

async function init() {
  games.map(async (g, i) => {
    try {
      console.log(`adding ${games[i].name}`);
      await axios.post("http://localhost:3001/api/game", games[i]);
      console.log("ok");
    } catch (err) {
      console.log(err);
    }

    process.exit();
  });
}

init();
