function unmute() {
    var video = document.getElementById('glorp');
    video.muted = false;
    video.play();
}

window.onload = function () {
    document.getElementById('glorp-video').addEventListener('click', unmute);
}