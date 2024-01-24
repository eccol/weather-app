import getWeather from './getWeather.js';
import { DisplayController } from './DisplayController.js';
import './style.css';

const displayController = new DisplayController();

function displayError(err) {
  const tempField = document.querySelector('.temperature');
  tempField.innerText = `${err}`;
}

document.querySelector('button').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const data = getWeather(city);

  data.then((d) => displayController.updateAll(d), displayError);
});
