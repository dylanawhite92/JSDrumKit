const secondHand = document.querySelector('.second-hand');

setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();

    // convert to degrees to properly rotate around clock face
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform  = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
}

setInterval(setDate, 1000);