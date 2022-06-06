const { User } = require("../models");




module.exports = {

    //gets single user by ID
    getSingleUserById(req, res) {
        try {
            User.findOne({ _id: req.params.userId })
                .select('-__v')
                .then((user) => {
                    if (!user) {
                       return res.status(404).json({ message: 'Could not find the user' })
                    }
                    res.json(user);
                })
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    getSingleUserByName(req, res) {
        try {
            User.findOne({ userName: req.params.userName })
                .select('-__v')
                .then((user) => {
                    if (!user) {
                       return res.status(404).json({ message: 'Could not find the user' })
                    }
                    res.json(user);
                })
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    // creates user...duh
    createUser(req, res) {
        try {
            User.create(req.body)
                .then((user) => {
                    if (!user) {
                       return res.status(404).json({ message: 'Could not find the user' })
                    }
                    res.json(user)
                })
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },

    //updates user
    updateUser(req, res) {
        try {
            User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body })
                .then((user) => {
                    if (!user) {
                       return res.status(404).json({ message: 'Could not find the user' })
                    }
                    console.log(user);
                    res.json("User Created")
                })
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
//deletes user
    deleteUser(req, res) {
        try {
            User.findOneAndDelete({ _id: req.params.userId })
                .then((user) => {
                    if (!user) {
                        return res.status(404).json({ message: 'Could not find the user' })
                     }
                    console.log(` Deleting...${user}`);
                    res.json(`${user} Deleted...`)
                })
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
//adds game to users favorite games
    addGame(req, res) {
        try{
            User.findOneAndUpdate({ _id: req.params.userId },{ $addToSet: { games: req.params.gameId } },{ runValidators: true, new: true })
            .then((user)=>{
                if (!user) {
                    return res.status(404).json({ message: 'Could not find the user' })
                 }
                 res.json(user)
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },

}