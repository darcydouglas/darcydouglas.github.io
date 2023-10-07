var video = document.getElementById("home_space_jump");
var playButton = document.getElementById("video_start_button");

function playVideo() {
    video.play();
}

playButton.addEventListener('click', playVideo);
