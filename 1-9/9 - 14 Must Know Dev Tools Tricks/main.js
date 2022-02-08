makeGreen = () => {
    const p = document.querySelector("p");

    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("hey, sup.");

// Interpolated
// Older Interpolated
console.log("Hello, I am a %s string!", "god damn");

// ES6 back tick Interpolated
let repText = "god damn";
console.log(`Hello, I am a ${repText} string!`);

// Styled
console.log("%c I am some great text", "font-size: 50px; background: red;");

// warning!
console.warn("OH NOOOOOO!");

// Error :|
console.error("SHIT!");

// Info
console.info("Crocodiles eat 3-4 people per year.");

// Testing
const p = document.querySelector("p");

console.assert(1 === 2, "You do not know what numbers are.");
console.assert(p.classList.contains("ouch"), "Class not found.");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

dogs.forEach(dog => {
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("Dylan");
console.count("James");
console.count("James");
console.count("Dylan");
console.count("Dylan");
console.count("Dylan");
console.count("James");

// timing
console.time("Fetching Data");
fetch("https://api.github.com/users/dylanawhite92")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("Fetching Data");
        console.log(data);
    });

// Tables
console.table(dogs);