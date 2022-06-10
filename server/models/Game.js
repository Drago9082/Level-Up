const { model, Schema } = require("mongoose");

const gameSchema = new Schema({
  name: {
    type: String,
  },
  path: {
    type: String,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
  highscore: {
    type: Number,
  },
  sourceURL: {
    type: String,
  },
  gitHubLink: {
    type: String,
  },
});

const Game = model("game", gameSchema);

module.exports = Game;
