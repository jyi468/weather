export interface StoreState {
    languageName: string; // programming language app was written in
    enthusiasmLevel: number; // varies
}

export interface WeatherState {
    city: string;
    scale: TempScale
    currentForecast: Forecast;
    // Forecasts are in 3 hour increments
    forecasts: Forecast[];
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