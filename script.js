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
        checkWinner(player)
        return gameboard.Gameboard
    }
    return {checkWinner, addMarker,}
})();
//add a board reset function
const playGame = (function () {
    //const playerOne = createPlayer ('Player one', 'X')
    //const playerTwo = createPlayer ('Player two', 'O')
})();