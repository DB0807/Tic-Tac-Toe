//change gameboared logic thorughout so correct versions of Gameboard and gameboard are used
const Gameboard = (function () {
    const gameboard = ["","","","","","","","",""]
    const getBoard = () => gameboard
    let winner = false
    return {gameboard, winner, getBoard}
})()

const gameFuncs = (function (){

    const chooseRandomPlayer = function (playerOne, playerTwo) {
        let playerNum = Math.floor(Math.random() * 2)
        return playerNum === 0 ? playerOne : playerTwo
    }

    const changeActivePlayer = function (currentPlayer, playerOne, playerTwo) {
        return currentPlayer === playerOne ? playerTwo : playerOne;
    }

    const clearGameboard = function () {
        return gameboard.Gameboard = ["","","","","","","","",""]
    }

    const checkWinner = function(player) {
        for(let i = 0; i <3; i++){
        if (gameboard.Gameboard[i * 3] === player.playerMarker && 
            gameboard.Gameboard[i * 3 + 1] === player.playerMarker && 
            gameboard.Gameboard[i * 3 + 2] === player.playerMarker) {
            gameboard.winner = true
            return console.log(`win on row ${i + 1}, ${player.playerName}`)
            }
        }
        for(let i = 0; i <3; i++){
        if (gameboard.Gameboard[i] === player.playerMarker && 
            gameboard.Gameboard[i + 3] === player.playerMarker && 
            gameboard.Gameboard[i + 6] === player.playerMarker) {
            gameboard.winner = true
            return console.log(`win on column ${i + 1}, ${player.playerName}`)
            }
        }
        if (gameboard.Gameboard[4] === player.playerMarker && 
            ((gameboard.Gameboard[0] === player.playerMarker && 
            gameboard.Gameboard[8] === player.playerMarker) ||
            (gameboard.Gameboard[2] === player.playerMarker && 
            gameboard.Gameboard[6] === player.playerMarker))) {
            gameboard.winner = true
            return console.log(`win on diag, ${player.playerName}`)
            }
        }

    const addMarker = function (boardSpace, marker, player){
        if (boardSpace <= 8 && gameboard.Gameboard[boardSpace] === ""){
            gameboard.Gameboard.splice(boardSpace, 1, marker)
            console.log(gameboard.Gameboard)
            return checkWinner(player)
        }
        else return alert('Dont cheat, skip a go!')
    }
    return {chooseRandomPlayer, 
            changeActivePlayer, 
            clearGameboard, 
            checkWinner, 
            addMarker,}
})();

const displayLogic = function (){
    const board = Gameboard.getBoard()
    const boardContainer = document.querySelector('#gameboard-container')
    let spaceNum = 0
    const createSpace = function () {
        const boardSpace = document.createElement('div')
        boardSpace.dataset.spaceNum = spaceNum
        boardSpace.classList.add('board-space')
        boardContainer.appendChild(boardSpace)
        spaceNum += 1
        return boardSpace
    }
    render = () => board.forEach(createSpace)

    return {render,}
}();

const playGame = function () {
     const createPlayer = function (name, marker) {
        const playerName = name
        const playerMarker = marker
        return {playerName, playerMarker,}
    }
    const playerOne = createPlayer(prompt('Enter your name:', 'Player One'), prompt('Choose your marker:','X'))
    const playerTwo = createPlayer(prompt('Enter your name:', 'Player Two'), prompt('Choose your marker:','O'))
    let activePlayer = gameFuncs.chooseRandomPlayer(playerOne, playerTwo)
    while (Gameboard.winner === false) {
        gameFuncs.addMarker(prompt(`${activePlayer.playerName}, Choose your square:`), activePlayer.playerMarker, activePlayer)
        activePlayer = gameFuncs.changeActivePlayer(activePlayer, playerOne, playerTwo)       
    }
};

displayLogic.render()
