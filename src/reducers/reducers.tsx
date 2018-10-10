import { WeatherAction } from "../actions/actions";
import { WeatherState, TempScale, Weather } from '../types/types';
import { RECEIVE_WEATHER } from "../constants/constants";

export function weather(state: WeatherState, action: WeatherAction): WeatherState {
    switch (action.type) {
        // Need to change action data into state
        case RECEIVE_WEATHER:
            //return { ...state };
            const json = action.json;

            return Object.assign({}, state, {
                city: json.city.name,
                country: json.country,
                scale: TempScale.F,
                forecasts: json.list.map((day: any) => {
                    return {
                        time: day.dt,
                        weather: getWeather(day.weather[0].description),
                        temperature: day.main.temp,
                        humidity: day.main.humidity,
                        precipitation: day.rain ? day.rain['3h'] : 0,
                        wind: day.wind
                    };
                }),
            });
        default:
            return state;
    }
}

function getWeather(weatherString: string): Weather {
    switch(weatherString) {
        case "clear sky":
            return Weather.ClearSky;
        case "few clouds":
            return Weather.FewClouds;
        case "broken clouds":
            return Weather.BrokenClouds;
        case "scattered clouds":
            return Weather.ScatteredClouds;
        case "light rain":
            return Weather.LightRain;
        case "moderate rain":
            return Weather.ModerateRain;
        case "heavy rain":
            return Weather.HeavyRain;
        default:
            return Weather.ClearSky;
    }
}