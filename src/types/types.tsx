export interface WeatherState {
    city: string;
    country: string;
    scale: TempScale
    // There is a maximum of 5 days in the API
    days: Day[];
    dayIndex: number;
    hourIndex: number;
    chartType: ChartType;
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

export interface Day {
    dow: number;
    weather: Weather;
    hi: number; // We will find the average high from all the Forecast objects
    lo: number; // We will find the average low from all the Forecast objects
    // Each day holds a maximum of 8 three hour Forecast objects
    hours: Forecast[]
}

export interface Wind {
    speed: number;
    deg: number;
}

export enum TempScale {
    K = 'K', // API sends kelvin by default
    C = 'C°',
    F = 'F°'
}

export enum ChartType {
    Temperature,
    Precipitation,
    Wind,
    Humidity
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