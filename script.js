const button = document.querySelector(".search-btn");

button.addEventListener("click", async () => {
  const city = document.querySelector(".search-inp").value;
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?q=${city}&key=be40b45426054aa398b112558242809`
  );
  const data = await response.json();

  const weather = {
    location: data.location.name + ", " + data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    wind: data.current.wind_kph + "km/h",
    humidity: data.current.humidity + "%",
  };

  document.querySelector(".location").innerHTML = weather.location;
  document.querySelector(".temp").innerHTML = weather.temp;
  document.querySelector(".condition").innerHTML = weather.condition;
  document.querySelector(".hum-value").innerHTML = weather.humidity;
  document.querySelector(".win-value").innerHTML = weather.wind;
});
