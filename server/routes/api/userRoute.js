const router = require('express').Router();



const {
    getSingleUserById,
    createUser,
    updateUser,
    deleteUser,
    addGame,
    getSingleUserByName
} = require("../../controllers/userController");

//api/user
//creates user
router.route('/')
.post(createUser);
//api/user/:userId
//gets user by id, udates users by id, delete user by id
router.route('/:userId')
.get(getSingleUserById)
.put(updateUser)
.delete(deleteUser);

router.route('/byname/:userName')
.get(getSingleUserByName)

//api/user/:userId/games/:gameId
//adds games to user's favorites
router.route('/:userId/games/:gameId')
.post(addGame);


module.exports = router;