console.log("Project is running 👀");

// API
const apiKey = "3808a6e7a5acefef03092717467ff338";

// Mood stuff
function setMood(mood) {

  const affirmation =
    document.getElementById("affirmation");

  const info =
    document.getElementById("info");

  // happy
  if (mood === "happy") {

    document.body.style.background =
      "#FFD93D";

    affirmation.textContent =
      "Keep shining ☀️";

    info.textContent =
      "You're in a great mood! Perfect time to discover something fun.";

    getMovies(35);
    getActivity();
    getSong("happy");
  }

  // sad
  if (mood === "sad") {

    document.body.style.background =
      "#2C3E50";

    affirmation.textContent =
      "It's okay to feel this 💙";

    info.textContent =
      "Maybe something comforting would help right now.";

    getMovies(18);
    getActivity();
    getSong("sad");
  }

  // stressed
  if (mood === "stressed") {

    document.body.style.background =
      "#6C5CE7";

    affirmation.textContent =
      "Breathe. You got this 💜";

    info.textContent =
      "Try slowing down and giving yourself a moment.";

    getMovies(10749);
    getActivity();
    getSong("stressed");
  }

  // BORED
  if (mood === "bored") {

    document.body.style.background =
      "#00ADB5";

    affirmation.textContent =
      "Let’s fix that 😎";

    info.textContent =
      "Time to discover something exciting.";

    getMovies(28);
    getActivity();
    getSong("bored");
  }
}

// get movies
function getMovies(genre) {

  const url =
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`;

  fetch(url)

    .then(res => res.json())

    .then(data => {
      displayMovies(data.results);
    });
}

// show movies
function displayMovies(movies) {

  const movieGrid =
    document.getElementById("movie-grid");

  movieGrid.innerHTML = "";

  // randomise movies
  const shuffled =
    movies.sort(() => 0.5 - Math.random());

  // SHOW FIRST 4
  shuffled.slice(0, 4).forEach(movie => {

    movieGrid.innerHTML += `

      <div class="movie-card">

        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}">

        <p>${movie.title}</p>

      </div>

    `;
  });
}

// activity api (I dont thnk this works)
function getActivity() {

  fetch("https://bored-api.appbrewery.com/random")

    .then(res => res.json())

    .then(data => {

      const activityBox =
        document.getElementById("activity");

      activityBox.innerHTML = `
        <p>🎲 ${data.activity}</p>
      `;
    });
}

// song rec (mixes up between 4)
function getSong(mood) {

  const songBox =
    document.getElementById("song");

  const songs = {

    happy: [
      "🎧 Happy — Pharrell Williams",
      "🎧 Walking on Sunshine — Katrina & The Waves",
      "🎧 Good as Hell — Lizzo",
      "🎧 Shut Up and Dance — WALK THE MOON"
    ],

    sad: [
      "🎧 Fix You — Coldplay",
      "🎧 Someone Like You — Adele",
      "🎧 Liability — Lorde",
      "🎧 Skinny Love — Bon Iver"
    ],

    stressed: [
      "🎧 Weightless — Marconi Union",
      "🎧 Holocene — Bon Iver",
      "🎧 Sunset Lover — Petit Biscuit",
      "🎧 Space Song — Beach House"
    ],

    bored: [
      "🎧 Feel It Still — Portugal. The Man",
      "🎧 Electric Feel — MGMT",
      "🎧 Kids — MGMT",
      "🎧 Tongue Tied — Grouplove"
    ]
  };

  // randomise song
  const randomIndex =
    Math.floor(Math.random() * songs[mood].length);

  songBox.innerHTML =
    `<p>${songs[mood][randomIndex]}</p>`;
}

// dark mode 
const darkToggle =
  document.getElementById("darkToggle");

darkToggle.addEventListener("change", () => {

  document.body.classList.toggle("dark-mode");

});