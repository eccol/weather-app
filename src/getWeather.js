const API_KEY = process.env.API_KEY;

export default async function getWeather(query) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return {
    currentTemp: data.current.temp_f,
    cityName: data.location.name,
    countryName: data.location.country,
    condition: data.current.condition.text,
    feelsLike: data.current.feelslike_f,
    windDir: data.current.wind_dir,
    windSpeed: data.current.wind_mph,
    forecastAvg: [
      data.forecast.forecastday[0].day.avgtemp_f,
      data.forecast.forecastday[1].day.avgtemp_f,
      data.forecast.forecastday[2].day.avgtemp_f,
    ],
  };
}
