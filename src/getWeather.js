const API_KEY = process.env.API_KEY;

export default async function getWeather(query) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  forecast = [];
  for (let i = 0; i < 3; i++) {
    daysForecast = {
      date: data.forecast.forecastday[i].date,
      avgTemp: data.forecast.forecastday[i].day.avgtemp_f,
      conditions: data.forecast.forecastday[i].day.condition.text,
    };
    forecast.push(daysForecast);
  }

  return {
    currentTemp: data.current.temp_f,
    cityName: data.location.name,
    countryName: data.location.country,
    regionName: data.location.region,
    condition: data.current.condition.text,
    feelsLike: data.current.feelslike_f,
    windDir: data.current.wind_dir,
    windSpeed: data.current.wind_mph,
    forecast: forecast,
  };
}
