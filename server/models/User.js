const {Schema, model} = require('mongoose')
const Games = require('./Game');

const bcrypt = require('bcrypt');


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
  password: {
    type: String,
    required: true,
    minlength: 5
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
