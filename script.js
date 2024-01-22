const gameboard = (function () {
    const Gameboard = ["","","","","","","","",""]
    return {Gameboard,}
})();

function createPlayer (name, marker) {
    const playerName = name
    const playerMarker = marker
    let score = 0
    const addScore = function () {
        return this.score += 1
    }
    return {playerName, playerMarker, score, addScore,}
}

const gameFuncs = (function (){
    const checkWinner = function(player) {
        for(let i = 0; i <3; i++){
          if (gameboard.Gameboard[i * 3] === player.marker && 
              gameboard.Gameboard[i * 3 + 1] === player.marker && 
              gameboard.Gameboard[i * 3 + 2] === player.marker) {
              return `win on row ${i + 1}`
            }
          }
        for(let i = 0; i <3; i++){
        if (gameboard.Gameboard[i] === player.marker && 
            gameboard.Gameboard[i + 3] === player.marker && 
            gameboard.Gameboard[i + 6] === player.marker) {
            return `win on column ${i + 1}`
            }
        }
        if (gameboard.Gameboard[4] === player.marker && 
            (gameboard.Gameboard[0] === player.marker && 
            gameboard.Gameboard[8] === player.marker) ||
            (gameboard.Gameboard[2] === player.marker && 
            gameboard.Gameboard[6] === player.marker)) {
            return `win on diag`
            }
        }
    const addMarker = function (boardSpace, mark){
        return gameboard.Gameboard.splice(boardSpace, 1, mark)
    }
    return {checkWinner, addMarker,}
})();

const playGame = (function () {
    const playerOne = createPlayer ('Player one', 'X')
    const playerTwo = createPlayer ('Player two', 'O')
})();