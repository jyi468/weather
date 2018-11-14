import * as constants from '../constants/constants';
import {Dispatch} from 'redux';
// import { data } from '../resources/mountain-view';
import {ChartType} from "../types/types";

// Weather

export interface ReceiveWeather {
    type: constants.RECEIVE_WEATHER;
    // TODO: Define json receive structure
    json: any;
}

export type WeatherAction = FetchWeather | ReceiveWeather | ChangeDay | ChangeHour | ChangeChart | toggleScale; // Add other weather actions here

export interface FetchWeather {
    type: constants.FETCH_WEATHER;
    (dispatch: Dispatch): object;
}

// Parse and transform data
export function receiveWeather(json: object): ReceiveWeather {
    return {
        json: json,
        type: constants.RECEIVE_WEATHER
    };
}

export function fetchWeather() {

    return (dispatch: Dispatch) => {
        return fetch('https://ipapi.co/json') // IP based location
            .then(response => response.json())
            .then((json) => {
                let lat = json.latitude;
                let lon = json.longitude;
                let timezone = json.timezone;
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=3b0908e2927857885e7e6ef65e51e4ec`, {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(json => {
                        json.timezone = timezone;
                        dispatch(receiveWeather(json))
                    });
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

export interface toggleScale {
    type: constants.CHANGE_SCALE;
}

export function toggleScale(): toggleScale {
    return {
        type: constants.CHANGE_SCALE,
    }
}