export class DisplayController {
  constructor() {
    this.inputField = document.getElementById('city');
    this.currentTemp = document.querySelector('.temperature');
    this.feelsLike = document.querySelector('.feels-like .data');
    this.conditions = document.querySelector('.condition .data');
    this.wind = document.querySelector('.wind .data');
    this.forecast = Array.from(document.querySelectorAll('.day .data'));
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
