var audioPlayer = document.getElementById('audioplayer');
var loaded = false;

var playBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');


pauseBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    audioPlayer.pause();

    return false;
});

playBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    audioPlayer.play();

    return false;
});

const playSong = (file) => {

        if(loaded == false){
            audioPlayer.innerHTML = `<source src = "`+file+`"type = "audio/mp3"/>`;
            loaded = true;
}

        audioPlayer.play();

        playBtn.style.display = "none";
        pauseBtn.style.display = "inline";
}

document.querySelectorAll('.main_col').forEach(item =>{

    item.addEventListener('click',event =>{
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');


        let playerArtistComponent = document.getElementsByClassName('player_artist');

        playerArtistComponent[0].innerHTML=`
            <img src="`+image+`">
            <h3>`+artist+`<br/><span>`+song+`</span></h3>`;

        
        playSong(file);

    })
});

slider = document.querySelector("input");
slider.oninput = function(){
    progressBar = document.querySelector("progress");
    progressBar.value = slider.value;
    sliderValue = document.querySelector(".sliderValue");
    sliderValue.innerHTML = slider.value;
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}
    function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
  
    audioPlayer.currentTime = (clickX / width) * duration 
}
  audioPlayer.addEventListener('timeupdate', updateProgress)
  progressContainer.addEventListener('click', setProgress)