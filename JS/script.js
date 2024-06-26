
// Getting HTML elements
let startButton = document.getElementById("startButton");
let answereButton = document.getElementById("showAnswereButton");
let nextJokesButton = document.getElementById("nextJokesButton");

let jokesBox = document.getElementById("jokes");
let jokesAnswereBox = document.getElementById("jokesAnswere");

let counter = 1;

// Function for getting jokes
const getJokes = async (index) => {
    let url = `https://official-joke-api.appspot.com/jokes/${index}`;
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    jokesBox.innerText = result.setup;
}

// Function for getting jokes answeres
const getAnswere = async (index) => {
    let url = `https://official-joke-api.appspot.com/jokes/${index}`;
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    jokesAnswereBox.innerText = result.punchline;
}


// Start Jikes button functionality
startButton.addEventListener('click', (event) => {
    getJokes(counter);
    startButton.disabled = true;
    answereButton.style.display = "block";
    //nextJokesButton.style.display = "block";
});


// Answere Jokes button functionality
answereButton.addEventListener('click', (event) => {
    getAnswere(counter);
    nextJokesButton.style.display = "block";
})


// Next Jokes button functionality
nextJokesButton.addEventListener('click', (event) => {
    counter++;
    getJokes(counter);
    jokesAnswereBox.innerText = "";
    nextJokesButton.style.display = "none";
})