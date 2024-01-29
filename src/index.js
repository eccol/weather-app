import getWeather from './getWeather.js';
import { DisplayController } from './DisplayController.js';
import './style.scss';

const modal = document.getElementById('options');
const displayController = new DisplayController();
let data = {};

function displayError(err) {
  data = {};
  displayController.showStatus('😢');
  console.log(err);
}

document.getElementById('options-button').addEventListener('click', () => {
  modal.classList = 'open';
  modal.showModal();
});

document.querySelector('.close').addEventListener('click', () => {
  modal.classList.add('close');
  modal.addEventListener('animationend', () => {
    if (modal.classList.contains('close')) {
      modal.classList.remove('close');
      modal.close();
    }
  });
});

document.getElementById('submit-button').addEventListener('click', (ev) => {
  ev.preventDefault();
  const query = document.getElementById('query').value;
  displayController.loadAll();

  if (query === '') {
    displayController.showStatus('🤷‍♀️');
    return;
  }

  const apiReturn = getWeather(query);
  apiReturn.then((d) => {
    data = d;
    displayController.updateAll(data);
  }, displayError);
});

document.getElementById('celsius').addEventListener('change', () => {
  if (Object.keys(data).length != 0) displayController.updateAll(data);
});
