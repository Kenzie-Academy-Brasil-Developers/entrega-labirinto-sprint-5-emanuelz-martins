let boxTop = 164;
let boxLeft = 10;

'use strict';
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === keys.down) {
        boxTop += 3;
    }

    if (keyName === keys.up) {
        boxTop -= 3;
    }

    if (keyName === keys.right) {
        boxLeft += 3;
    }

    if (keyName === keys.left) {
        boxLeft -= 3;
    }

    document.querySelector('#actual-player').style.top = `${boxTop}px`;
    document.querySelector('#actual-player').style.left = `${boxLeft}px`;
});

