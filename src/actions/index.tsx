import * as constants from '../constants'

// Create types for increment and decrement actions
export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

// Create action for cases when action can be increment or decrement
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// Create functions
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

// Weather
export interface FetchWeather{
    type: constants.FETCH_WEATHER;
    json: object;
}
export type WeatherAction = FetchWeather; // Add other weather actions here

export function fetchWeather(json: object): FetchWeather {
    return {
        type: constants.FETCH_WEATHER,
        json
    };
}