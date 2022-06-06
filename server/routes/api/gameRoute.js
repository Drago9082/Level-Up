const router = require('express').Router();



const {
    getGames,
    getSingleGame,
    createGame,
    updateGame,
    deleteGame,
} = require("../../controllers/gameController");

//api/game
//gets list of all games
router.route('/')
.get(getGames)
.post(createGame);
//api/games/:gameId
//gets game by id, udates game by id, delete game by id
router.route('/:gameId')
.get(getSingleGame)
.put(updateGame)
.delete(deleteGame);
//api/game/
//adds games to user's favorites
// router.route('/:userId/games/:gameId')
// .post(addGame);


module.exports = router;