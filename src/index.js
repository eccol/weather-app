const API_KEY = process.env.API_KEY;

async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  const data = await fetch(url);
  const json = await data.json();
  const currentTemp = await json.current.temp_f;
  console.log('current temp is', currentTemp);
}

document.querySelector('button').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  getWeather(city);
});
