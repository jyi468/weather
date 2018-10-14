import * as constants from '../constants/constants';
import { Dispatch } from 'redux';
import { data } from '../resources/mountain-view';
import {ChartType} from "../types/types";
// Weather

export interface ReceiveWeather {
    type: constants.RECEIVE_WEATHER;
    // TODO: Define json receive structure
    json: any;
}

export type WeatherAction = FetchWeather | ReceiveWeather | ChangeDay; // Add other weather actions here

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