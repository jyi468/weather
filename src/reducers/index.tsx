import { WeatherAction } from "../actions";
import { WeatherState } from '../types';
import { RECEIVE_WEATHER } from "../constants";

export function weather(state: WeatherState, action: WeatherAction): WeatherState {
    switch (action.type) {
        case RECEIVE_WEATHER:
            return { ...state };
    }
    return state;
}