document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector("#no-bttn");

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