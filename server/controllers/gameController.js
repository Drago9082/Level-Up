const { Game } = require("../models");
const { gameTotal } = require("../utils/total");

module.exports = {
  // gets all GAMES
  getGames(req, res) {
    try {
      Game.find({}).then(async (game) => {
        const gamesObj = { games, gameTotal: await gameTotal() };
        return res.json(gamesObj);
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  //gets single game by ID
  getSingleGame(req, res) {
    try {
      Game.findOne({ _id: req.params.gameID })
        .select("-__v")
        .then((game) => {
          if (!game) {
            return res
              .status(404)
              .json({ message: "Could not find that game" });
          }
          res.json(game);
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  // creates games...duh
  createGame(req, res) {
    try {
      Game.create(req.body).then((game) => {
        if (!game) {
          return res.status(404).json({ message: "Could not find that game" });
        }
        res.json(game);
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  //updates games
  updateGame(req, res) {
    try {
      Game.findOneAndUpdate(
        { _id: req.params.gameID },
        { $set: req.body }
      ).then((game) => {
        if (!game) {
          return res.status(404).json({ message: "Could not find that game" });
        }
        console.log(game);
        res.json("Game Updated");
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  //deletes games
  deleteGame(req, res) {
    try {
      Game.findOneAndDelete({ _id: req.params.gameID }).then((game) => {
        if (!game) {
          return res.status(404).json({ message: "Could not find thAT game" });
        }
        console.log(` Deleting...${game}`);
        res.json(`${game} Deleted...`);
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
