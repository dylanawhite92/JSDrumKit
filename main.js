window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    if(!audio) return; // Stop function if no value returned
    audio.currentTime = 0; // Rewind sound when key pressed
    audio.play();
});