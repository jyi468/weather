export interface WeatherState {
    city: string;
    country: string;
    scale: TempScale
    // Forecasts are in 3 hour increments
    forecasts: Forecast[];
    current: number;
    fetchWeather?: () => object;
}

// Each forecast is 3 hours of weather
export interface Forecast {
    time: number;
    weather: Weather
    temperature: number;
    humidity: number;
    precipitation: number;
    wind: Wind;
}

export interface Wind {
    speed: number;
    deg: number;
}

export enum TempScale {
    K, // API sends kelvin by default
    C,
    F
}

export enum Weather {
    ClearSky = 'wi-day-sunny',
    // Clouds
    BrokenClouds = 'wi-day-cloudy',
    ScatteredClouds = 'wi-day-cloudy',
    FewClouds = 'wi-day-cloudy',
    // Rain
    LightRain = 'wi-day-showers',
    ModerateRain = 'wi-day-rain',
    HeavyRain = 'wi-day-rain'
}