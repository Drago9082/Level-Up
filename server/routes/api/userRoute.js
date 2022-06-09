const router = require("express").Router();

const {
  getSingleUserById,
  signUp,
  updateUser,
  getUserName,
  deleteUser,
  addGame,
  getSingleUserByName,
  logIn,
  logOut,
  loggedIn,
} = require("../../controllers/userController");

//api/user
//creates user
router.route("/signup").post(signUp);

router.route("/login").post(logIn);

router.route("/logout").get(logOut);

router.route("/loggedIn").get(loggedIn);

router.route("/test").get((req, res) => {
  res.status(200).send("Testing Testing You Suck");
});

router.route("/byname/:userName").get(getSingleUserByName);

router.route("/:userId").get(getSingleUserById);

//api/user/:userId/games/:gameId
//adds games to user's favorites
router.route("/:userId/games/:gameId").post(addGame);

router.route("/getUserName/:userId").get(getUserName);

module.exports = router;
