const router = require('express').Router();



const {
    getSingleUserById,
    signUp,
    updateUser,
    deleteUser,
    addGame,
    getSingleUserByName,
    logIn,
    logOut,
    loggedIn
} = require("../../controllers/userController");

//api/user
//creates user
router.route('/signup')
.post(signUp);

router.route('/login')
.post(logIn);

router.route('/logout')
.get(logOut);

router.route('/loggedIn')
.post(loggedIn);
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