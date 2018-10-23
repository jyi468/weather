import * as constants from '../constants/constants';
import { Dispatch } from 'redux';
// import { data } from '../resources/mountain-view';
import {ChartType} from "../types/types";
// Weather

export interface ReceiveWeather {
    type: constants.RECEIVE_WEATHER;
    // TODO: Define json receive structure
    json: any;
}

export type WeatherAction = FetchWeather | ReceiveWeather | ChangeDay | ChangeHour | ChangeChart; // Add other weather actions here

export interface FetchWeather {
    type: constants.FETCH_WEATHER;
    (dispatch: Dispatch): object;
}

// Parse and transform data
export function receiveWeather(json: object): ReceiveWeather {
    return {
        json: json,
        type: constants.RECEIVE_WEATHER
    } ;
}

export function fetchWeather() {

    return (dispatch: Dispatch) => {
        /*return new Promise(function (resolve, reject) {
            setTimeout(function() {
                resolve(data)
            });
        })*/
        navigator.geolocation.getCurrentPosition((position) => {
            // const lat = Math.round(position.coords.latitude);
            // const lon = Math.round(position.coords.longitude);
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=3b0908e2927857885e7e6ef65e51e4ec`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => dispatch(receiveWeather(json)))
        });
    }
}

export interface ChangeDay {
    type: constants.CHANGE_DAY;
    dayIndex: number;
}

export function changeDay(dayIndex: number): ChangeDay {
    return {
        type: constants.CHANGE_DAY,
        dayIndex
    }
}

export interface ChangeHour {
    type: constants.CHANGE_HOUR;
    hourIndex: number;
}

export function changeHour(hourIndex: number): ChangeHour {
    return {
        type: constants.CHANGE_HOUR,
        hourIndex
    }
}

export interface ChangeChart {
    type: constants.CHANGE_CHART;
    chartType: ChartType;
}

export function changeChart(chartType: ChartType): ChangeChart {
    return {
        type: constants.CHANGE_CHART,
        chartType
    }
}