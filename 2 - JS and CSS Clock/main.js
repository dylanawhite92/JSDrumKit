const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    // convert to degrees to properly rotate around clock face
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minDegrees = ((mins / 60) * 360) + 90;
    const hourDegrees = ((hour / 12) * 360) + 90;

    secondHand.style.transform  = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // come back and insert code to remove animation break
    // remove css class and reappend when clock is turning over
   
    console.log(`${hour}:${mins}:${seconds}`);
}

setInterval(setDate, 1000);