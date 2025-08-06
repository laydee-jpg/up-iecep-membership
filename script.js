document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector("#no-bttn");
    const backgroundMusic = document.querySelector("#background-music");


    function startBackgroundMusic() {
        if (backgroundMusic) {
            backgroundMusic.volume = 0.5; // Set volume to 50%
            backgroundMusic.play().catch(function(error) {
                console.log("Audio autoplay failed:", error);
            });
        }
    }

    startBackgroundMusic();

    document.addEventListener("click", function() {
        startBackgroundMusic();
    }, { once: true });

    document.addEventListener("keydown", function() {
        startBackgroundMusic();
    }, { once: true });

    noButton.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});