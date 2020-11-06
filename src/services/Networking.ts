import { WeatherInfo } from '../models/WeatherInfo';
import axios from 'axios'
import { NETWORK_CONSTANTS } from '../constants/index'

function getWeatherInfo(lat: number, lon: number): Promise<WeatherInfo> {
    return new Promise<WeatherInfo>((resolve,reject) => {
        axios.get<WeatherInfo>(`${NETWORK_CONSTANTS.apiUrl}` +
        `?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${NETWORK_CONSTANTS.apiKey}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 5000,
        })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
}

export default { getWeatherInfo }