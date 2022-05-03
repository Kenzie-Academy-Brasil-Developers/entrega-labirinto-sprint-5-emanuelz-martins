const restartButton = document.querySelector('#restart-button');
const winCard = document.querySelector('.win-card');

const showWinCard = () => {
    if (winCard.classList.contains('hidden')) {
        winCard.classList.remove('hidden');
    }
    applyBlurEffect();
}

const applyBlurEffect = () => {
    mazeMap.classList.add('blur');
}

const removeBlurEffect = () => {
    mazeMap.classList.remove('blur');
}

restartButton.addEventListener('click', () => {
    document.querySelector('#actual-player').style.top = '180px';
    document.querySelector('#actual-player').style.left = '0px';
    winCard.classList.add('hidden');
    removeBlurEffect();
    boxTop = 180;
    boxLeft = 0;
    playerPosition = map[9][0];
    playOneUpAudio();
    setTimeout(() => {
        location.reload();
    }, 1000);
});
