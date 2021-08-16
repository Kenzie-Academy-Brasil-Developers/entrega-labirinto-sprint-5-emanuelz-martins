let positionX = 9;
let positionY = 0;
let boxTop = 180;
let boxLeft = 0;
let playerPosition = map[positionX][positionY];

const movePlayer = (event) => {
    const keyName = event.key;

    if (keyName === keys.down) {
        if (positionX <= 13) {
            boxTop += 19.641;
            positionX++;
            playerPosition = map[positionX][positionY];
            if (playerPosition === 'W') {
                positionX--;
                boxTop -= 19.641;
            }
            if (playerPosition === 'F') {
                showWinCard();
                stopBackGroundAudio();
                playWinAudio();
            }
        }
    }

    if (keyName === keys.up) {
        if (positionX >= 1) {
            boxTop -= 19.641;
            positionX--;
            playerPosition = map[positionX][positionY];
            if (playerPosition === 'W') {
                positionX++;
                boxTop += 19.641;
            }
            if (playerPosition === 'F') {
                showWinCard();
                stopBackGroundAudio();
                playWinAudio();
            }
        }
    }

    if (keyName === keys.right) {
        if (positionY <= 19) {
            boxLeft += 19.641;
            positionY++;
            playerPosition = map[positionX][positionY];
            if (playerPosition === 'W') {
                positionY--;
                boxLeft -= 19.641;
            }
            if (playerPosition === 'F') {
                showWinCard();
                stopBackGroundAudio();
                playWinAudio();
            }
        }
    }

    if (keyName === keys.left) {
        if (positionY >= 1) {
            boxLeft -= 19.641;
            positionY--;
            playerPosition = map[positionX][positionY];
            if (playerPosition === 'W') {
                positionY++;
                boxLeft += 19.641;
            }
            if (playerPosition === 'F') {
                showWinCard();
                stopBackGroundAudio();
                playWinAudio();
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
