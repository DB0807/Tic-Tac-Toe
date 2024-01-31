const gameboard = (function () {
    const Gameboard = ["","","","","","","","",""]
    const viewGameboard = () => Gameboard
    let winner = false
    return {Gameboard, winner, viewGameboard}
})();

function createPlayer (name, marker) {
    const playerName = name
    const playerMarker = marker
    let score = 0
    return {playerName, playerMarker, score,}
}

const gameFuncs = (function (){
    const changeActivePlayer = function (currentPlayer, playerOne, playerTwo) {
        return currentPlayer === playerOne ? playerTwo : playerOne;
    }
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
            gameboard.winner = true
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
        if (gameboard.Gameboard[4] === player.playerMarker && 
            ((gameboard.Gameboard[0] === player.playerMarker && 
            gameboard.Gameboard[8] === player.playerMarker) ||
            (gameboard.Gameboard[2] === player.playerMarker && 
            gameboard.Gameboard[6] === player.playerMarker))) {
            player.score += 1
            return console.log(`win on diag, ${player.playerName} has ${player.score} points`)
            }
        }
    const addMarker = function (boardSpace, marker, player){
        if (boardSpace <= 8 && gameboard.Gameboard[boardSpace] === ""){
            gameboard.Gameboard.splice(boardSpace, 1, marker)
            console.log(gameboard.Gameboard)
        //need to check if === '' before adding marker
        //check if <9
            return checkWinner(player)
        }
        else return alert('Dont cheat, skip a go!')
    }
    return {changeActivePlayer, clearGameboard, checkGameover, checkWinner, addMarker,}
})();
//add a board reset function
const playGame = function () {
    const playerOne = createPlayer(prompt('Enter your name:', 'Player One'), prompt('Choose your marker:','X'))
    const playerTwo = createPlayer(prompt('Enter your name:', 'Player Two'), prompt('Choose your marker:','O'))
    let activePlayer = playerOne
    // let activePlayer === something to choose player randomly
    //create function to switch active player, like if player === x ? y : x
    while (gameboard.winner === false) {
        gameFuncs.addMarker(prompt('Choose your square:',), activePlayer.playerMarker, activePlayer)
        activePlayer = gameFuncs.changeActivePlayer(activePlayer, playerOne, playerTwo)       
    }
    //if (checkGameover(player) === true) {return `${player.playerName} wins!`}
    //clearGameboard()
};