console.log("Project is running!! yay!!! 👀");

// ima add API stuff later

function setMood(mood) {
  const affirmation = document.getElementById("affirmation");
  const info = document.getElementById("info");

  // Mood-based content
  if (mood === "happy") {
    document.body.style.background = "#FFD93D";
    affirmation.textContent = "Keep shining, you're doing great ☀️";
    info.textContent = "You're in a great mood—perfect time to explore something new!";
  }

  if (mood === "sad") {
    document.body.style.background = "#2C3E50";
    affirmation.textContent = "It's okay to feel this way. Take your time 💙";
    info.textContent = "Maybe something comforting would help right now.";
  }

  if (mood === "stressed") {
    document.body.style.background = "#6C5CE7";
    affirmation.textContent = "Breathe. You've handled worse 💜";
    info.textContent = "Try something calming or distracting.";
  }

  if (mood === "bored") {
    document.body.style.background = "#00ADB5";
    affirmation.textContent = "Let’s fix that boredom 😎";
    info.textContent = "Time to discover something fun!";
  }
}