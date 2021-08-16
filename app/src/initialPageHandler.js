const creditsCard = document.querySelector('#credits-card');
const infoCard = document.querySelector('#info-card');
const btnBackPage = document.querySelector('#back-page');
const btnStartGame = document.querySelector('#btn-startGame');
const btnCredits = document.querySelector('#btn-credits');
const btnInfo = document.querySelector('.btn-showInfo');

btnCredits.addEventListener('click', () => {
    btnStartGame.classList.add('hidden');
    btnCredits.classList.add('hidden');
    btnInfo.classList.add('hidden');
    creditsCard.classList.remove('hidden');
    btnBackPage.classList.remove('hidden');
});

btnInfo.addEventListener('click', () => {
    btnStartGame.classList.add('hidden');
    btnCredits.classList.add('hidden');
    btnInfo.classList.add('hidden');
    infoCard.classList.remove('hidden');
    btnBackPage.classList.remove('hidden');
});

btnBackPage.addEventListener('click', () => {
    btnStartGame.classList.remove('hidden');
    btnCredits.classList.remove('hidden');
    btnInfo.classList.remove('hidden');

    if (!infoCard.classList.contains('hidden')) {
        infoCard.classList.add('hidden');
    }

    if (!creditsCard.classList.contains('hidden')) {
        creditsCard.classList.add('hidden')
    }

    if (!btnBackPage.classList.contains('hidden')) {
        btnBackPage.classList.add('hidden');
    }
});

btnStartGame.addEventListener('click', () => {
    mazeMap.classList.remove('hidden');
    btnStartGame.classList.add('hidden');
    btnCredits.classList.add('hidden');
    btnInfo.classList.add('hidden');
    playHiAudio();
    setTimeout(() => {
        playBackgroundSong();
    }, 800);
});
