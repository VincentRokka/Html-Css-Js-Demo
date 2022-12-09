function playSound() {
    const audio = new Audio('/Audios/SmallSound1.mp3');
    audio.play();
}

const midRightBody = document.querySelector('#right-sub');

midRightBody.onclick = () => {
    playSound();
}

const midLeftBody = document.querySelector('#left-sub');

midLeftBody.onclick = () => {
    playSound();
}
