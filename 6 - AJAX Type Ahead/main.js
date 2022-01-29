// A cities.json file from github
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
// Utilizing the browser's built-in fetch to return our promise
fetch(endpoint)
    .then(blob => blob.json()
    .then(data => cities.push(...data)));

// Determine if city/state matches what is searched
findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        
        return place.city.match(regex) || place.state.match(regex);
    })
}

// Display searches that match input
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    
    // Create list elements with searched inputs, join them after otherwise the
    // elements are added as entries in an array and get broken up with commas
    const html = matchArray.map(place => {
        return `
            <li>
                <span class="name">${place.city}, ${place.state}</span>
                <span class="population">${place.population}</span>
            </li>
        `;
    }).join('');

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);