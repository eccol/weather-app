import getWeather from './getWeather.js';
import { DisplayController } from './DisplayController.js';
import './style.css';

const displayController = new DisplayController();

function displayError(err) {
  const tempField = document.querySelector('.temperature');
  displayController.showStatus('😢');
  console.log(err);
}

document.querySelector('button').addEventListener('click', (ev) => {
  ev.preventDefault();
  const city = document.getElementById('city').value;
  displayController.loadAll();

  const data = getWeather(city);
  data.then((d) => displayController.updateAll(d), displayError);
});
