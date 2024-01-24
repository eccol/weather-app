export class DisplayController {
  constructor() {
    this.inputField = document.getElementById('city');
    this.currentTemp = document.querySelector('.temperature');
    this.feelsLike = document.querySelector('.feels-like .data');
    this.conditions = document.querySelector('.condition .data');
    this.wind = document.querySelector('.wind .data');
    this.forecastHeaders = Array.from(
      document.querySelectorAll('.day .header'),
    );
    this.forecastData = Array.from(document.querySelectorAll('.day .data'));
  }

  updateAll(data) {
    const region =
      data.countryName === 'United States of America'
        ? data.regionName
        : data.countryName;
    const location = `${data.cityName}, ${region}`;
    this.inputField.value = location;

    this.currentTemp.innerText = data.currentTemp;
    this.feelsLike.innerText = data.feelsLike + ' °F';
    this.conditions.innerText = data.condition;
    this.wind.innerText = `${data.windSpeed} mph ${data.windDir}`;
    for (let i = 0; i < this.forecastData.length; i++) {
      this.forecastHeaders[i].innerText = data.forecastDates[i];
      this.forecastData[i].innerText = data.forecastAvg[i] + ' °F';
    }
  }
}
