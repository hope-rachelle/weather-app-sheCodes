function formatDate() {
  let date = new Date();
  let currentHour = date.getHours();
  if (currentHour > 12) {
    currentHour = currentHour - 12;
  }
  let currentMin = date.getMinutes();
  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedsday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let today = days[date.getDay()];
  let currentDate = document.querySelector("#date");
  currentDate.innerHTML = `${today} ${currentHour}:${currentMin}`;
}
formatDate();

//change current city button//
function changeCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#current-city").value;
  let apiKey = "9b49b786c41ac06639af307d20e8207c";
  let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;
  axios.get(`${apiWeather}`).then(showWeather);
}
function showWeather(response) {
  document.querySelector("#my-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#real-feel").innerHTML = `Real Feel ${Math.round(
    response.data.main.feels_like
  )}°`;
  document.querySelector("#humidity").innerHTML = `Humidity ${Math.round(
    response.data.main.humidity
  )}%`;
}
let selectCity = document.querySelector(".current-city");
selectCity.addEventListener("submit", changeCity);

// location button//
function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findPosition);
}
function findPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "9b49b786c41ac06639af307d20e8207c";
  let apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(`${apiWeather}`).then(locationTemp);
}
function locationTemp(response) {
  document.querySelector("#my-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#real-feel").innerHTML = `Real Feel ${Math.round(
    response.data.main.feels_like
  )}°`;
  document.querySelector("#humidity").innerHTML = `Humidity ${Math.round(
    response.data.main.humidity
  )}%`;
}
let findLocation = document.querySelector("#location");
findLocation.addEventListener("click", currentLocation);

/*function changeUnitC(event) {
  event.preventDefault();
  let celcius = document.querySelector("#current-temp");
  let celciusTemp = Math.round((36 - 32) * 0.5556);
  celcius.innerHTML = `${celciusTemp}`;
}
let selectUnitC = document.querySelector("#celcius");
selectUnitC.addEventListener("click", changeUnitC);

function changeUnitF(event) {
  event.preventDefault();
  let farenheit = document.querySelector("#current-temp");
  farenheit.innerHTML = `36`;
}
let selectUnitF = document.querySelector("#farenheit");
selectUnitF.addEventListener("click", changeUnitF);*/
