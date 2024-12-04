function unmute() {
    var video = document.getElementById('glorp');
    video.muted = !video.muted;
    video.play();
}

window.onload = function () {
    document.getElementById('glorp-video').addEventListener('click', unmute);
    document.title = "prasetyo's mothership"
}