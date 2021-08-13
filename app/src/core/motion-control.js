const walls = document.querySelectorAll('.wall');

let positionX = 9;
let positionY = 0;
let playerPosition = map[positionX][positionY];
let boxTop = 165;
let boxLeft = 0;

const movePlayer = (event) => {
    const keyName = event.key;

    if (keyName === keys.down) {
        if (positionX <= 13) {
            boxTop += 16;
            positionX++;
            playerPosition = map[positionX][positionY];
            if (playerPosition === 'W') {
                positionX--;
                boxTop -= 16;
            }
            if (playerPosition === 'F') {
                alert('você venceu!!!');
            }
        }
    }

    if (keyName === keys.up) {
        if (positionX >= 1) {
            boxTop -= 16;
            positionX--;
            playerPosition = map[positionX][positionY];
            if (playerPosition === 'W') {
                positionX++;
                boxTop += 16;
            }
            if (playerPosition === 'F') {
                alert('você venceu!!!');
            }
        }
    }

    if (keyName === keys.right) {
        if (positionY <= 19) {
            boxLeft += 16;
            positionY++;
            playerPosition = map[positionX][positionY];
            if (playerPosition === 'W') {
                positionY--;
                boxLeft -= 16;
            }
            if (playerPosition === 'F') {
                alert('você venceu!!!');
            }
        }
    }

    if (keyName === keys.left) {
        if (positionY >= 1) {
            boxLeft -= 16;
            positionY--;
            playerPosition = map[positionX][positionY];
            if (playerPosition === 'W') {
                positionY++;
                boxLeft += 16;
            }
            if (playerPosition === 'F') {
                alert('você venceu!!!');
            }
        }
    }
}

'use strict';
document.addEventListener('keydown', (event) => {
    movePlayer(event);
    document.querySelector('#actual-player').style.top = `${boxTop}px`;
    document.querySelector('#actual-player').style.left = `${boxLeft}px`;
});
