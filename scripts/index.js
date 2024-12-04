function unmute() {
    var video = document.getElementById('glorp');
    video.muted = false;
    video.play();
}

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('glorp-video').addEventListener('click', unmute);
});