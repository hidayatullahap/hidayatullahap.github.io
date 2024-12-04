function unmute() {
    var video = document.getElementById('glorp');
    video.muted = false;
    video.play();
}

document.getElementById('glorp-video').addEventListener('click', unmute);