document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById("home_space_jump");
    var playButton = document.getElementById("video_start_button");
    var mainHeading = document.getElementById("main-heading");
    var subHeading = document.getElementById("sub-heading");

    function playVideo() {
        video.play();
        mainHeading.style.display = 'none';  // Hide main heading
        subHeading.style.display = 'none';   // Hide sub heading
    }

    playButton.addEventListener('click', playVideo);
});
