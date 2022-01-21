window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    
    if(!audio) return; // Stop function if no value returned
    audio.currentTime = 0; // Rewind sound when key pressed
    audio.play();
    
    key.classList.add('playing');
});

removeTransition = e => {
    if(e.propertyName !== 'transform') return; // Skip if not the transform value
    e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));