interface Current {
    dt: number,
    sunrise: number,
    sunset: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_gust?: number,
    wind_deg: number,
    weather: [Weather],
    rain?: Precipitation,
    snow?: Precipitation,
}

interface Precipitation {
    lastHour: number,
}