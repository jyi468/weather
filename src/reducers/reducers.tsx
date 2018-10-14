import { WeatherAction } from "../actions/actions";
import {WeatherState, TempScale, Weather, ChartType} from '../types/types';
import { RECEIVE_WEATHER, CHANGE_DAY } from "../constants/constants";

export function weather(state: WeatherState, action: WeatherAction): WeatherState {
    switch (action.type) {
        // Need to change action data into state
        case RECEIVE_WEATHER:
            const json = action.json;
            let hi = 0;
            let lo = Infinity;
            let importance = 0;
            return Object.assign({}, state, {
                dayIndex: 0,
                hourIndex: 0,
                city: json.city.name,
                country: json.city.country,
                chartType: ChartType.Precipitation,
                scale: TempScale.F,
                days: json.list.reduce((accumulator: any, hour: any, currentIndex: number) => {
                    let weather = getWeather(hour.weather[0].description);
                    let forecast = {
                        time: hour.dt,
                        weather: weather,
                        temperature: hour.main.temp,
                        humidity: hour.main.humidity,
                        precipitation: hour.rain ? hour.rain['3h'] : 0,
                        wind: hour.wind
                    };

                    if (currentIndex % 8 === 0) {
                        // Add new day
                        accumulator.push({
                            weather: weather,
                            dow: new Date(hour.dt * 1000).getDay(),
                            hours: [forecast]
                        });
                    } else {
                        // If 3-hour weather is more important than current weather for day, replace it
                        let currentImportance = weatherImportance(weather);

                        if (currentImportance > importance) {
                            accumulator[Math.floor(currentIndex / 8)].weather = weather;
                            importance = currentImportance;
                        }
                        // Add hour (Forecast object) to existing day day
                        accumulator[Math.floor(currentIndex / 8)].hours.push(forecast);
                    }

                    hi = Math.max(hi, hour.main.temp_max);
                    lo = Math.min(lo, hour.main.temp_min);

                    // Add temperature hi and lo for day if index is last in day
                    if ((currentIndex + 1) % 8 === 0) {
                        accumulator[Math.floor(currentIndex / 8)].hi = hi;
                        accumulator[Math.floor(currentIndex / 8)].lo = lo;
                        hi = 0;
                        lo = Infinity;
                    }
                    return accumulator;
                }, [])
            });
        case CHANGE_DAY:
            return {...state, dayIndex: action.dayIndex};
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

/**
 * Returns importance of weather ranking from 0 to n - 1. 0 is least important, n - 1 is most important.
 * n is number of weather types.
 *
 * @param {Weather} weather
 * @returns {number}
 */
// TODO: Replace with object map holding Weather enums
function weatherImportance(weather: Weather): number {
    switch(weather) {
        case Weather.ClearSky:
            return 0;
        case Weather.FewClouds:
            return 1;
        case Weather.BrokenClouds:
            return 2;
        case Weather.ScatteredClouds:
            return 3;
        case Weather.LightRain:
            return 4;
        case Weather.ModerateRain:
            return 5;
        case Weather.HeavyRain:
            return 6;
        default:
            return 0;
    }
}