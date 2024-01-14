function showTromsoTime() {
  let timeElement = document.querySelector("#time");
  let tromsoTime = moment().tz("CET");

  timeElement.innerHTML = `<i class="fa-regular fa-clock"></i> ${tromsoTime.format(
    "H:mm"
  )}`;
}

function showTromsoTemp(response) {
  let temperatureElement = document.querySelector("#temperature");
  let tromsoTemperature = response.data.temperature.current;

  temperatureElement.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> ${Math.round(
    tromsoTemperature
  )}°C`;
}

showTromsoTime();
setInterval(showTromsoTime, 1000);

let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=18.95508&lat=69.6489&key=491037f95bt62c7eo1c6b568c53adb94&units=metric`;
axios.get(apiUrl).then(showTromsoTemp);
