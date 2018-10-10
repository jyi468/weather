import { WeatherAction } from "../actions/actions";
import { WeatherState } from '../types/types';
import { RECEIVE_WEATHER } from "../constants/constants";

export function weather(state: WeatherState, action: WeatherAction): WeatherState {
    switch (action.type) {
        case RECEIVE_WEATHER:
            return { ...state };
    }
    return state;
}