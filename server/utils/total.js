async function gameTotal(){
    Game.aggregate()
    .count("gameCount")
    .then((totalGames) => totalGames)
    
}

module.exports = { gameTotal }
    

