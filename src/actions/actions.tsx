import * as constants from '../constants/constants';
import { Dispatch } from 'redux';
import { data } from '../resources/mountain-view';
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
        return new Promise(function (resolve, reject) {
            setTimeout(function() {
                resolve(data)
            });
        })

        /*return fetch("http://localhost:5000/src/resources/mountain-view.js", {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })*/
            //.then(response => response.json())
            .then(json => dispatch(receiveWeather(json)))
    }
}

/*
export function fetchWeatherMock() {
    return data;
}*/
