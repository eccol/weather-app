const API_KEY = process.env.API_KEY;

async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  const data = await fetch(url);
  const json = await data.json();
  console.log(json);
  const currentTemp = await json.current.temp_f;
  const cityName = await json.location.name;
  const countryName = await json.location.country;
  return {
    currentTemp,
    cityName,
    countryName,
  };
}

function updateTemp(data) {
  const cityField = document.querySelector('.city-name');
  cityField.innerText = `${data.cityName}, ${data.countryName}`;

  const tempField = document.querySelector('.temperature');
  tempField.innerText = `${data.currentTemp} degress Fahrenheit`;
}

function displayError(err) {
  const tempField = document.querySelector('.temperature');
  tempField.innerText = `${err}`;
}

document.querySelector('button').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const data = getWeather(city);

  data.then(updateTemp, displayError);
});
