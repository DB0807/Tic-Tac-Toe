const gameboard = (function () {
    const Gameboard = [,,,,,,,,,]
    return {Gameboard,}
})();

function createPlayer (name, marker) {
    const playerName = name
    const playerMarker = marker
    return {playerName, playerMarker,}
}