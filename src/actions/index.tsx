import * as constants from '../constants';
import { Dispatch } from 'redux';

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

export interface ReceiveWeather {
    type: constants.RECEIVE_WEATHER
}

export type WeatherAction = FetchWeather | ReceiveWeather; // Add other weather actions here

export interface FetchWeather {
    type: constants.FETCH_WEATHER;
    (dispatch: Dispatch): object;
}

export function receiveWeather(json: object): ReceiveWeather {
    return {...json, type: constants.RECEIVE_WEATHER} ;
}

export function fetchWeather() {
    return (dispatch: Dispatch) => {
        return fetch("../resources/mountain-view.json")
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(json)))
    }
}