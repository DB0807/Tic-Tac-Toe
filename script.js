const gameboard = (function () {
    const Gameboard = ["","","","","","","","",""]
    return {Gameboard,}
})();

function createPlayer (name, marker) {
    const playerName = name
    const playerMarker = marker
    let score = 0
    return {playerName, playerMarker, score,}
}

const gameFuncs = (function (){
    const clearGameboard = function () {
        return gameboard.Gameboard = ["","","","","","","","",""]
    }
    const checkGameover = function (player){
        if (player.score === 3) {
            return true
        }
        else return false
    }
    const checkWinner = function(player) {
        for(let i = 0; i <3; i++){
        if (gameboard.Gameboard[i * 3] === player.playerMarker && 
            gameboard.Gameboard[i * 3 + 1] === player.playerMarker && 
            gameboard.Gameboard[i * 3 + 2] === player.playerMarker) {
            player.score += 1
            return console.log(`win on row ${i + 1}, ${player.playerName} has ${player.score} points`)
            }
        }
        for(let i = 0; i <3; i++){
        if (gameboard.Gameboard[i] === player.playerMarker && 
            gameboard.Gameboard[i + 3] === player.playerMarker && 
            gameboard.Gameboard[i + 6] === player.playerMarker) {
            player.score += 1
            return console.log(`win on column ${i + 1}, ${player.playerName} has ${player.score} points`)
            }
        }
        if (gameboard.Gameboard[4] === player.marker && 
            ((gameboard.Gameboard[0] === player.marker && 
            gameboard.Gameboard[8] === player.marker) ||
            (gameboard.Gameboard[2] === player.marker && 
            gameboard.Gameboard[6] === player.marker))) {
            player.score += 1
            return console.log(`win on diag, ${player.playerName} has ${player.score} points`)
            }
        }
    const addMarker = function (boardSpace, marker, player){
        gameboard.Gameboard.splice(boardSpace, 1, marker)
        console.log(gameboard.Gameboard)
        return checkWinner(player)
    }
    return {clearGameboard, checkGameover, checkWinner, addMarker,}
})();
//add a board reset function
const playGame = function () {
    let winner = ''
    const playerOne = createPlayer(prompt('Enter your name:', 'Player One'), prompt('Choose your marker:','X'))
    const playerTwo = createPlayer(prompt('Enter your name:', 'Player Two'), prompt('Choose your marker:','O'))
    while (winner === '') {
        gameFuncs.addMarker(prompt('Choose your square:',), playerOne.playerMarker, playerOne)
        gameFuncs.addMarker(prompt('Choose your square:',), playerTwo.playerMarker, playerTwo)        
    }
    if (checkGameover(player) === true) {return `${player.playerName} wins!`}
    clearGameboard()
};