const { model, Schema} = require('mongoose')

const gameSchema = new Schema({
  Name: {
    type: String,
    
  },
  Genre: {
    type: String,
    
  },
  Highscore: {
    type: Number,
    
  },
  Author: {
    type: String,
    
  },
  SourceURL: {
    type: String,
    
  },
  GitHubLink: {
    type: String,
    
  },
});

const Game = model('game', gameSchema)

module.exports = Game;
