    // start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    console.log(age, age2);

    age = 200;
    console.log(age, age2);

    // Create space in console
    console.log("----------------------------");
    console.log("----------------------------");

    // Let's say we have an array
    const players = ['Dylan', 'Sarah', 'Nick', 'Adam'];

    // and we want to make a copy of it.
    const team = players;
    console.log(players, team);

    // You might think we can just do something like this:
    // team[3] = "Lux";

    // however what happens when we update that array?
    // console.log(players);

    // Create space in console
    console.log("----------------------------");
    console.log("----------------------------");

    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    
    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    team2[3] = "Lux";

    console.log(team2, players);

    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    console.log(team3);

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = "Yee Haw";

    const team5 = Array.from(players);
    team5[2] = "Nice";

    console.log(team4, team5);

    // now when we update it, the original one isn't changed
    console.log(players);

    // Create space in console
    console.log("----------------------------");
    console.log("----------------------------");

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Dylan White',
      age: 80
    };

    // and think we make a copy:
    // const captain = person;
    // captain.number = 99;

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99 });
    console.log(cap2);
    console.log(person);

    // We will hopefully soon see the object ...spread (but not yet)
    // const cap3 = {...person};

    // Create space in console
    console.log("----------------------------");
    console.log("----------------------------");

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const realPerson = {
        name: "James Johnson",
        age: 100,
        social: {
            twitter: "@jimmyjohns",
            facebook: "jimmy.dev"
        }
    }

    const dev = Object.assign({}, realPerson);

    dev.name = "The Devil";
    
    console.log(realPerson, dev);

    // Create space in console
    console.log("----------------------------");
    console.log("----------------------------");
    
    // The poor man's deep clone, not sure about performance
    const dev2 = JSON.parse(JSON.stringify(realPerson));

    dev2.social.twitter = "@hellperson"

    console.log(realPerson, dev2);