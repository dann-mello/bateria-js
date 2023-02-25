//Funções
function playSound(sound){
    let audioEl = document.querySelector(`#s_${sound}`);
    let keyEl = document.querySelector(`div[data-key="${sound}"]`);

    if(audioEl){
        audioEl.currentTime = 0;//Zerando o audio
        audioEl.play();
    };

    if(keyEl){
        keyEl.classList.add('active');

        setTimeout(() => {
            keyEl.classList.remove('active')
        }, 400);
    };
}

function playComposition(songArr){
    let wait = 0;

    for(let songItem of songArr) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        
        wait += 250;
    }
}

//Eventos
document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArr = song.split('');
        playComposition(songArr);
    }
});