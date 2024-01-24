const API_KEY = process.env.API_KEY;

export default async function getWeather(query) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return {
    currentTemp: data.current.temp_f,
    cityName: data.location.name,
    countryName: data.location.country,
  };
}
