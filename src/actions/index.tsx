import * as constants from '../constants';
import { Dispatch } from 'redux';
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