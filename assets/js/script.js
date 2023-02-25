document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLowerCase());
})

function playSound(sound){
    let audioEl = document.querySelector(`#s_${sound}`);
    let keyEl = document.querySelector(`div[data-key="${sound}"]`);

    if(audioEl){
        audioEl.currentTime = 0;//Zerando o audio
        audioEl.play();
    }

    if(keyEl){
        keyEl.classList.add('active');

        setTimeout(() => {
            keyEl.classList.remove('active')
        }, 400)
    }
}