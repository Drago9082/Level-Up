const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  //gets single user by ID
  getSingleUserById(req, res) {
    try {
      User.findOne({ _id: req.params.userId })
        .select("-__v")
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: "Could not find the user" });
          }
          res.json(user);
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  getSingleUserByName(req, res) {
    try {
      User.findOne({ userName: req.params.userName })
        .select("-__v")
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: "Could not find the user" });
          }
          res.json(user);
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  // creates user...duh
  async signUp(req, res) {
    try {
      const { userName, email, password, passwordVerify } = req.body;

      //=======VALIDATORS FOR USER INFO=======//

      if (password.length < 8 || password.length > 16) {
        return res.status(400).json({
          errorMessage:
            "There is an issue with the length of your password, Please make sure that it is between 8-16 characters long",
        });
      }

      if (password !== passwordVerify) {
        return res.status(400).json({
          errorMessage: "Your passwords do not match, Please re-enter",
        });
      }
      //Validates user is not a duplicate
      const emailCheck = await User.findOne({ email: email });
      if (emailCheck) {
        return res
          .status(400)
          .json({ errorMessage: "This email is already registered." });
      }
      const userCheck = await User.findOne({ userName: userName });
      if (userCheck) {
        return res
          .status(400)
          .json({ errorMessage: "This userName is already registered." });
      }

      //password hashing
      const salt = await bcrypt.genSalt();
      const pwHashed = await bcrypt.hash(password, salt);

      //save account to DB
      const newUser = new User({
        userName,
        email,
        pwHashed,
      });
      const newUserSave = await newUser.save();
      //=======COOKIE SETUP AND SEND=======//
      //cookie setup, first "validate" the token by signing with JWT
      const token = jwt.sign(
        {
          user: newUserSave._id,
        },
        process.env.JWT_SECRETPASS
      );
      //send the cookie back out
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send();
    } catch (error) {
      console.log("signup error:", "\n", error);
      return res
        .status(500)
        .json({ errorMessage: "Something went wrong on the server." });
    }
  },

  //updates user
  updateUser(req, res) {
    try {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body }
      ).then((user) => {
        if (!user) {
          return res.status(404).json({ message: "Could not find the user" });
        }
        console.log(user);
        res.json("User Created");
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  //deletes user
  deleteUser(req, res) {
    try {
      User.findOneAndDelete({ _id: req.params.userId }).then((user) => {
        if (!user) {
          return res.status(404).json({ message: "Could not find the user" });
        }
        console.log(` Deleting...${user}`);
        res.json(`${user} Deleted...`);
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  //adds game to users favorite games
  addGame(req, res) {
    try {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { games: req.params.gameId } },
        { runValidators: true, new: true }
      ).then((user) => {
        if (!user) {
          return res.status(404).json({ message: "Could not find the user" });
        }
        res.json(user);
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async logIn(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        let errorMessage =
          "Missing info, fill out both email and password to log in";
        console.log(errorMessage);
        return res.status(400).json({
          errorMessage,
        });
      }

      let { _id, userName, pwHashed, games } = await User.findOne({
        email: email,
      });

      const passwordCompare = await bcrypt.compare(password, pwHashed);

      if (!passwordCompare) {
        let errorMessage = "Wrong credentials";
        console.log(errorMessage);
        return res.status(400).json({ errorMessage });
      }
      //existingUser = { ...existingUser, pwHashed: null };
      //=======COOKIE SETUP AND SEND=======//
      //cookie setup, first "validate" the token by signing with JWT
      const token = jwt.sign(
        {
          user: _id,
        },
        process.env.JWT_SECRETPASS
      );
      //send the cookie back out

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send({ _id, email, userName, games });
    } catch (err) {
      console.log("err loggin in:", "\n", err);
      res
        .status(500)
        .send({ errorMessage: "Something went wrong on the server." });
    }
  },
  async loggedIn(req, res) {
    try {
      const authToken = req.cookies.token;
      if (!authToken) {
        return res.json(false);
      }
      const thisResponse = await jwt.verify(authToken, process.env.JWT_SECRETPASS);
      res.send(thisResponse);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  logOut(req, res) {
    res
      .cookie("token", "", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(0),
      })
      .send();
  },
  async getUserName(req, res) {
    try {
      const authToken = req.cookies.token;
      if (!authToken) {
        return res.json(false);
      }
      await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: "Could not find the user" });
          }
          res.json(user);
        });
    } catch (err) {
      console.log(err);
      res.json(false);
    }
  },
};
