import getWeather from './getWeather.js';
import { DisplayController } from './DisplayController.js';

const displayController = new DisplayController();

// function updateTemp(data) {
//   const cityField = document.querySelector('.location');
//   cityField.innerText = `${data.cityName}, ${data.countryName}`;

//   const tempField = document.querySelector('.temperature');
//   tempField.innerText = `${data.currentTemp} degrees Fahrenheit`;
// }

function displayError(err) {
  const tempField = document.querySelector('.temperature');
  tempField.innerText = `${err}`;
}

document.querySelector('button').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const data = getWeather(city);

  // data.then(updateTemp, displayError);
  data.then((d) => displayController.updateAll(d), displayError);
});
