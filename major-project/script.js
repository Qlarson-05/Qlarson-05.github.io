console.log("Project is running!! yay!!! 👀");

const apiKey = "3808a6e7a5acefef03092717467ff338";

function setMood(mood) {
  const affirmation = document.getElementById("affirmation");
  const info = document.getElementById("info");

  // mood visuals
  if (mood === "happy") {
    document.body.style.background = "#FFD93D";
    affirmation.textContent = "Keep shining ☀️";
    info.textContent = "You're in a great mood!";
    getMovie(35); // comedy
  }

  if (mood === "sad") {
    document.body.style.background = "#2C3E50";
    affirmation.textContent = "It's okay to feel this 💙";
    info.textContent = "Maybe something comforting.";
    getMovie(18); // drama
  }

  if (mood === "stressed") {
    document.body.style.background = "#6C5CE7";
    affirmation.textContent = "Breathe. You got this 💜";
    info.textContent = "Let’s calm things down.";
    getMovie(10749); // romance
  }

  if (mood === "bored") {
    document.body.style.background = "#00ADB5";
    affirmation.textContent = "Let’s fix that 😎";
    info.textContent = "Time for something exciting!";
    getMovie(28); // action
  }
}

// get movie
function getMovie(genre) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`;

  fetch(url)
    .then(res => res.json())
    .then(data => displayMovie(data.results[0]));
}

// show movie
function displayMovie(movie) {
  const movieBox = document.getElementById("movie");

  movieBox.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}">
    <p>${movie.title}</p>
  `;
}