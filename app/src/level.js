const mazeMap = document.querySelector('#maze');
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const createMap = () => {
    for (let row = 0; row < map.length; row++) {
        const mazeRow = document.createElement('div');
        mazeRow.classList.add('row');

        for (let cell = 0; cell < map[row].length; cell++) {
            const mazeCell = document.createElement('div');
            const player = document.createElement('div');
            
            mazeCell.classList.add('cell');
            player.classList.add('player');
            player.setAttribute('id', 'actual-player');

            if (map[row][cell] === ' ') {
                mazeCell.setAttribute('class', 'spot');
            }

            if (map[row][cell] === 'W') {
                mazeCell.setAttribute('class', 'wall');
            }

            if (map[row][cell] === 'S') {
                mazeCell.setAttribute('id', 'start-place');
                mazeCell.setAttribute('class', 'start');
                playerPosition = [row, cell];
                mazeCell.appendChild(player);
            }
            
            if (map[row][cell] === 'F') {
                mazeCell.setAttribute('class', 'finish-place');
                finishPosition = [row, cell];
            }
            
            mazeRow.appendChild(mazeCell);
        }
        mazeMap.appendChild(mazeRow);
    }
}
