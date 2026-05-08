console.log("Project is running 👀");

const apiKey = "3808a6e7a5acefef03092717467ff338";

/* lil song library */
const songs = {
  happy: [
    "Happy — Pharrell Williams",
    "Can’t Stop the Feeling — Justin Timberlake",
    "Good as Hell — Lizzo",
    "Uptown Funk — Mark Ronson ft. Bruno Mars",
    "Walking on Sunshine — Katrina & The Waves"
  ],

  sad: [
    "Fix You — Coldplay",
    "Someone Like You — Adele",
    "The Night We Met — Lord Huron",
    "Let Her Go — Passenger",
    "Skinny Love — Bon Iver"
  ],

  stressed: [
    "Weightless — Marconi Union",
    "Sunset Lover — Petit Biscuit",
    "Intro — The xx",
    "Breathe Me — Sia",
    "River Flows in You — Yiruma"
  ],

  bored: [
    "Feel It Still — Portugal. The Man",
    "Do I Wanna Know — Arctic Monkeys",
    "Electric Feel — MGMT",
    "Midnight City — M83",
    "Tongue Tied — Grouplove"
  ]
};

/* song display */
function setSongs(mood) {
  const songBox = document.getElementById("song");

  const list = songs[mood];

  // shuffle + pick 3 random songs
  const shuffled = list.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  songBox.innerHTML = `
    🎧 Songs:<br><br>
    ${selected.map(s => `• ${s}`).join("<br>")}
  `;
}

/* mood system */
function setMood(mood) {

  const affirmation = document.getElementById("affirmation");
  const info = document.getElementById("info");
  const activity = document.getElementById("activity");

  // happy
  if (mood === "happy") {

    document.body.style.background = "#FFD93D";

    affirmation.textContent = "Keep shining ☀️";

    info.textContent =
      "You're in a great mood! Perfect time to discover something fun.";

    activity.textContent =
      "🎲 Activity: Go on a walk or call a friend.";

    setSongs("happy");

    getMovies(35);
  }

  // sad
  if (mood === "sad") {

    document.body.style.background = "#2C3E50";

    affirmation.textContent = "It's okay to feel this 💙";

    info.textContent =
      "Maybe something comforting would help right now.";

    activity.textContent =
      "🎲 Activity: Watch comfort videos or journal.";

    setSongs("sad");

    getMovies(18);
  }

  // stressed
  if (mood === "stressed") {

    document.body.style.background = "#6C5CE7";

    affirmation.textContent = "Breathe. You got this 💜";

    info.textContent =
      "Try slowing down and giving yourself a moment.";

    activity.textContent =
      "🎲 Activity: Take a short break or meditate.";

    setSongs("stressed");

    getMovies(10749);
  }

  // bored
  if (mood === "bored") {

    document.body.style.background = "#00ADB5";

    affirmation.textContent = "Let’s fix that 😎";

    info.textContent =
      "Time to discover something exciting.";

    activity.textContent =
      "🎲 Activity: Try a random hobby or game.";

    setSongs("bored");

    getMovies(28);
  }
}

function getMovies(genre) {

  const url =
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      displayMovies(data.results);
    });
}

/* show movies*/
function displayMovies(movies) {

  const movieGrid =
    document.getElementById("movie-grid");

  movieGrid.innerHTML = "";

  // shuffle movies
  const shuffled =
    movies.sort(() => 0.5 - Math.random());

  // show 4 movies
  shuffled.slice(0, 4).forEach(movie => {

    movieGrid.innerHTML += `

      <div class="movie-card">

        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}">

        <p>${movie.title}</p>

      </div>

    `;
  });
}

/* dark mode */
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("change", () => {

  document.body.classList.toggle("dark-mode");

});