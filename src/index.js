import getWeather from './getWeather.js';
import { DisplayController } from './DisplayController.js';
import './style.css';

const displayController = new DisplayController();
let data;

function displayError(err) {
  const tempField = document.querySelector('.temperature');
  displayController.showStatus('😢');
  console.log(err);
}

document.querySelector('button').addEventListener('click', (ev) => {
  ev.preventDefault();
  const city = document.getElementById('city').value;
  displayController.loadAll();

  const apiReturn = getWeather(city);
  apiReturn.then((d) => {
    data = d;
    displayController.updateAll(data);
  }, displayError);
});

document.getElementById('celsius').addEventListener('change', () => {
  if (data) displayController.updateAll(data);
});
