export interface WeatherState {
    city: string;
    country: string;
    scale: TempScale
    // Forecasts are in 3 hour increments
    forecasts: Forecast[];
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
    ClearSky,
    // Clouds
    BrokenClouds,
    ScatteredClouds,
    FewClouds,
    // Rain
    LightRain,
    ModerateRain,
    HeavyRain
}