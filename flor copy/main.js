window.addEventListener('load', () => {
    document.body.classList.remove("container");
    const audio = document.querySelector("audio");
    if (audio) {
        audio.play().catch(error => {
            console.log("Audio autoplay was prevented: ", error);
            // Show a play button or message to the user if autoplay fails.
            // For now, we just log the error.
            // We could add a click listener to the body to play the audio on the first click.
            document.body.addEventListener('click', () => {
                audio.play();
            }, { once: true });
        });
    }
});
