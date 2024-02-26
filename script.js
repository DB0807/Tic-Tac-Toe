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

    const clearGameboard = function () {
        return gameboard.Gameboard = ["","","","","","","","",""]
    }

    const checkWinner = function(player) {
        for(let i = 0; i <3; i++){
        if (Gameboard.gameboard[i * 3] === player.playerMarker && 
            Gameboard.gameboard[i * 3 + 1] === player.playerMarker && 
            Gameboard.gameboard[i * 3 + 2] === player.playerMarker) {
            Gameboard.winner = true
            return console.log(`${player.playerName} has won on row ${i + 1}!`)
            }
        }
        for(let i = 0; i <3; i++){
        if (Gameboard.gameboard[i] === player.playerMarker && 
            Gameboard.gameboard[i + 3] === player.playerMarker && 
            Gameboard.gameboard[i + 6] === player.playerMarker) {
            Gameboard.winner = true
            return console.log(`${player.playerName} has won on col ${i + 1}!`)
            }
        }
        if (Gameboard.gameboard[4] === player.playerMarker && 
            ((Gameboard.gameboard[0] === player.playerMarker && 
            Gameboard.gameboard[8] === player.playerMarker) ||
            (Gameboard.gameboard[2] === player.playerMarker && 
            Gameboard.gameboard[6] === player.playerMarker))) {
            Gameboard.winner = true
            return console.log(`${player.playerName} has won on a diagonal!`)
            }
        if (!Gameboard.gameboard.includes("")) {
            Gameboard.winner = true;
            return console.log("It's a draw!");
            }
        }
        

    const addMarker = function (boardSpace, marker, player){
        if (boardSpace <= 8 && Gameboard.gameboard[boardSpace] === ""){
            Gameboard.gameboard.splice(boardSpace, 1, marker)
            console.log(Gameboard.gameboard)
            return checkWinner(player)
        }
        else return alert('Dont cheat, skip a go!')
    }
    return {chooseRandomPlayer,  
            clearGameboard, 
            checkWinner, 
            addMarker,}
})();

const createPlayer = function (name, marker) {
    const playerName = name
    const playerMarker = marker
    return {playerName, playerMarker,}
};

const displayController = (function () {
    const board = Gameboard.getBoard()
    const boardContainer = document.querySelector('#gameboard-container')
    let spaceNum = 0
    const createSpace = function () {
        const boardSpace = document.createElement('div')
        boardSpace.dataset.spaceNum = spaceNum
        boardSpace.classList.add('board-space')
        boardSpace.textContent = Gameboard.gameboard[spaceNum]
        boardContainer.appendChild(boardSpace)
        spaceNum += 1
        return boardSpace
    }
    const render = () => board.forEach(createSpace)

    const startGame = function () {
        const playGameBtn = document.querySelector('#play-game')
        playGameBtn.addEventListener('click', () => {
            playGame();
        })
    }

    return {render, startGame}
})();

const playGame = function () {

    const boardSpaces = document.querySelectorAll('.board-space');
    const updateBoard = function () {
        boardSpaces.forEach((boardSpace, index) => {
            boardSpace.textContent = Gameboard.gameboard[index];
        });
    }

    const playerOne = createPlayer(prompt('Enter your name:', 'Player One'), prompt('Choose your marker:','X'))
    const playerTwo = createPlayer(prompt('Enter your name:', 'Player Two'), prompt('Choose your marker:','O'))

    let activePlayer = gameFuncs.chooseRandomPlayer(playerOne, playerTwo)

    const changeActivePlayer = function (currentPlayer, playerOne, playerTwo) {
        return currentPlayer === playerOne ? playerTwo : playerOne;
    }

    boardSpaces.forEach(boardSpace => {
        boardSpace.addEventListener('click', () => {
        if (Gameboard.winner != true){
        gameFuncs.addMarker(boardSpace.dataset.spaceNum, activePlayer.playerMarker, activePlayer)
        activePlayer = changeActivePlayer(activePlayer, playerOne, playerTwo)
        updateBoard()}
        })
    });
};

displayController.render()
displayController.startGame()