// A cities.json file from github
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
// Utilizing the browser's built-in fetch to return our promise
fetch(endpoint)
    .then(blob => blob.json()
    .then(data => cities.push(...data)));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // Determine if city/state matches what is searched
        const regex = new RegExp(wordToMatch, 'gi');
        
        return place.city.match(regex) || place.state.match(regex);
    })
}