import axios from 'axios';

const API_KEY = '2c7c247189182c745b8e3c758621b93f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`;
    const request = axios.get(url);
    console.log('Request:', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
