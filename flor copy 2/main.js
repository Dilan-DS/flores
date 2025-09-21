document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    const musicSelection = document.getElementById('music-selection');

    playButton.addEventListener('click', () => {
        const selectedMusic = musicSelection.value;
        let songName = '';
        if (selectedMusic.includes('Floricienta')) {
            songName = 'floricienta';
        } else if (selectedMusic.includes('Yatra')) {
            songName = 'yatra';
        }

        // Redirigir a flower.html con la canción seleccionada como parámetro
        window.location.href = `flower.html?song=${songName}`;
    });
});
