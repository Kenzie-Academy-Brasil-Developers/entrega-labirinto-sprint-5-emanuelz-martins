const hiAudio = document.querySelector('.hi');
const bgAudio = document.querySelector('.goumet-race');
const winAudio = document.querySelector('.win-song');
const oneUpAudio = document.querySelector('.one-up');

const playHiAudio = () => {
    hiAudio.volume = 0.09;
    hiAudio.play();
}

const playBackgroundSong = () => {
    bgAudio.volume = 0.07;
    bgAudio.play();
}

const playWinAudio = () => {
    winAudio.volume = 0.06;
    winAudio.play();
}

const playOneUpAudio = () => {
    oneUpAudio.volume = 0.06;
    oneUpAudio.play();
}

const stopBackGroundAudio = () => {
    bgAudio.pause();
}
