window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    console.log(audio);
});