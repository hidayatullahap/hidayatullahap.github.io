var video = document.getElementById('glorp');
var glorpBtn = document.getElementById('glorp-btn');

glorpBtn.addEventListener('click', function () {
    video.muted = false;
    video.play();
});