export class DisplayController {
  constructor() {
    this.inputField = document.getElementById('city');
    this.currentTemp = document.querySelector('.temperature');
    this.feelsLike = document.querySelector('.feels-like');
    this.conditions = document.querySelector('.condition');
    this.wind = document.querySelector('.wind');
    this.forecast = Array.from(document.querySelectorAll('.day'));
  }

  updateAll(data) {
    const location = `${data.cityName}, ${data.countryName}`;
    this.inputField.value = location;

    this.currentTemp.innerText = data.currentTemp;
    this.feelsLike.innerText = data.feelsLike;
    this.conditions.innerText = data.condition;
    this.wind.innerText = `${data.windSpeed} ${data.windDir}`;
    for (let i = 0; i < this.forecast.length; i++) {
      this.forecast[i].innerText = data.forecastAvg[i];
    }
  }
}
