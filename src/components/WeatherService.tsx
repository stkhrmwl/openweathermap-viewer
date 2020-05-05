// @flow
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

// api_key
import ENV from '../../env.json';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = ENV.OWM_API_KEY;

function getCurrentWeatherEndpoint(city: any) {
  return `${BASE_URL}weather?q=${city}` + `&appid=${API_KEY}&lang=ja`;
}

function getCurrentWeather(city: any): Promise<CurrentWeather> {
  const endpoint = getCurrentWeatherEndpoint(city);
  return fetch(endpoint)
    .then(response => response.json())
    .then(json => new CurrentWeather(json));
}

function getWeatherForecastEndpoint(city: any) {
  const { en, latitude, longitude } = city;
  if (latitude && longitude) {
    return `${BASE_URL}forecast` + `?lat=${latitude}&lon=${longitude}` + `&appid=${API_KEY}&lang=ja`;
  }
  return `${BASE_URL}forecast?q=${en}&appid=${API_KEY}&lang=ja`;
}

function getWeatherForecast(city: any): Promise<WeatherForecast[]> {
  const endpoint = getWeatherForecastEndpoint(city);
  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json.list.map((item: any) => new WeatherForecast(item)));
}

export { getCurrentWeather }