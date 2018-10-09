import { EnthusiasmAction, WeatherAction } from "../actions";
import { StoreState, WeatherState } from '../types';
import {INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, RECEIVE_WEATHER} from "../constants";

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
    }
    return state;
}

export function weather(state: WeatherState, action: WeatherAction): WeatherState {
    switch (action.type) {
        case RECEIVE_WEATHER:
            return { ...state };
    }
    return state;
}