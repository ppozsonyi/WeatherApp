export interface WeatherInfo {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: Current,
    daily: [Daily],
}
