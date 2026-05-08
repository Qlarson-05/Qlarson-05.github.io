console.log("Project is running 👀");

const apiKey = "3808a6e7a5acefef03092717467ff338";

// mood stuff
function setMood(mood) {

  const affirmation = document.getElementById("affirmation");
  const info = document.getElementById("info");
  const activity = document.getElementById("activity");
  const song = document.getElementById("song");

  // happy
  if (mood === "happy") {

    document.body.style.background = "#FFD93D";

    affirmation.textContent =
      "Keep shining ☀️";

    info.textContent =
      "You're in a great mood! Perfect time to discover something fun.";

    activity.textContent =
      "🎲 Activity: Go on a walk or call a friend.";

    song.textContent =
      "🎧 Song: Happy — Pharrell Williams";

    getMovies(35); // comedy
  }

  // sad
  if (mood === "sad") {

    document.body.style.background = "#2C3E50";

    affirmation.textContent =
      "It's okay to feel this 💙";

    info.textContent =
      "Maybe something comforting would help right now.";

    activity.textContent =
      "🎲 Activity: Watch comfort videos or journal.";

    song.textContent =
      "🎧 Song: Fix You — Coldplay";

    getMovies(18); // drama
  }

  // stressed
  if (mood === "stressed") {

    document.body.style.background = "#6C5CE7";

    affirmation.textContent =
      "Breathe. You got this 💜";

    info.textContent =
      "Try slowing down and giving yourself a moment.";

    activity.textContent =
      "🎲 Activity: Take a short break or meditate.";

    song.textContent =
      "🎧 Song: Weightless — Marconi Union";

    getMovies(10749); // romance
  }

  // bored
  if (mood === "bored") {

    document.body.style.background = "#00ADB5";

    affirmation.textContent =
      "Let’s fix that 😎";

    info.textContent =
      "Time to discover something exciting.";

    activity.textContent =
      "🎲 Activity: Try a random hobby or game.";

    song.textContent =
      "🎧 Song: Feel It Still — Portugal. The Man";

    getMovies(28); // action
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

  // show the first 4
  shuffled.slice(0, 4).forEach(movie => {

    movieGrid.innerHTML += `

      <div class="movie-card">

        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}">

        <p>${movie.title}</p>

      </div>

    `;
  });
}