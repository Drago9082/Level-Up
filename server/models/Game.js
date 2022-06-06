const { model, Schema} = require('mongoose')

const gameSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  Highscore: {
    type: Number,
    required: true,
  },
});

const Game = model('game', gameSchema)

module.exports = Game;
