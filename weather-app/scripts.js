// API
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b25a9bd40fmsh9bc1e2839a47d62p1ae6cdjsn913f01b822a2',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

// Weather Data
async function getWeather(location = "Pullman") {

  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log("API DATA:", data);

    updateUI(data);

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

// Update UI
function updateUI(data) {

  // Current Weather
  document.getElementById("temp").textContent =
    `${data.location.name} ~ ${data.current.temp_f}°F`;

  document.getElementById("condition").textContent =
    data.current.condition.text;

  document.getElementById("wind").textContent =
    `${data.current.wind_mph} mph`;

  document.getElementById("humidity").textContent =
    `${data.current.humidity}%`;

  document.getElementById("weatherIcon").src =
    "https:" + data.current.condition.icon;

  // Forecast Data
  const days = data.forecast.forecastday;

  for (let i = 0; i < 3; i++) {

    document.getElementById(`day${i+1}-temp`).textContent =
      `${days[i].day.maxtemp_f}° / ${days[i].day.mintemp_f}°`;

    document.getElementById(`day${i+1}-cond`).textContent =
      days[i].day.condition.text;

    document.getElementById(`day${i+1}-wind`).textContent =
      `${days[i].day.maxwind_mph} mph`;
  }
}

// Modal shmodal controls
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const form = document.getElementById("locationForm");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = document.getElementById("locationInput").value;

  if (location.trim() !== "") {
    getWeather(location);
  }

  modal.classList.add("hidden");
});

// Load default location
getWeather();