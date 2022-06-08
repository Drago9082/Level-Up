const {Schema, model} = require('mongoose')
const Game = require('./Game');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  pwHashed: {
    type: String,
    required: true
  },
  games: [
    {
      type: Schema.Types.ObjectId,
      ref:"Game"
    }
  ]
});



const User = model('User', userSchema);

module.exports = User;
