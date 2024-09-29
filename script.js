const input = document.querySelector(".search-inp");

input.addEventListener("keydown", (e) => {
  if (e.key != "Enter") return;
  e.preventDefault();
  document.querySelector(".search-btn").click();
});

async function getWeather() {
  const city = input.value;
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?q=${city}&key=be40b45426054aa398b112558242809`
  );
  if (response.status === 400) {
    document.querySelector(".data").style.display = "none";
    document.querySelector(".default").style.display = "flex";
    document.querySelector(".default-data").innerHTML =
      "No weather information available. Try searching for a valid location.";
    return;
  }
  const data = await response.json();

  const weather = {
    location: data.location.name + ", " + data.location.country,
    temp: Math.round(data.current.temp_c) + "°C",
    condition: data.current.condition.text,
    wind: data.current.wind_kph + "km/h",
    humidity: data.current.humidity + "%",
    icon: data.current.condition.icon,
  };

  document.querySelector(".data").style.display = "flex";
  document.querySelector(".default").style.display = "none";
  document.querySelector(".location").innerHTML = weather.location;
  document.querySelector(".temp").innerHTML = weather.temp;
  document.querySelector(".condition").innerHTML = weather.condition;
  document.querySelector(".hum-value").innerHTML = weather.humidity;
  document.querySelector(".win-value").innerHTML = weather.wind;
  document.querySelector(".condition-icon").src = weather.icon;
}
