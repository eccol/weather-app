const API_KEY = process.env.API_KEY;

async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  const data = await fetch(url);
  const json = await data.json();
  const currentTemp = await json.current.temp_f;
  return currentTemp;
}

function updateTemp(temp) {
  const tempField = document.querySelector('.temperature');
  tempField.innerText = `${temp} degress Fahrenheit`;
}

function displayError(err) {
  const tempField = document.querySelector('.temperature');
  tempField.innerText = `${err}`;
}

document.querySelector('button').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const temp = getWeather(city);

  cityField = document.querySelector('.city-name');
  cityField.innerText = city;
  temp.then(updateTemp, displayError);
});
