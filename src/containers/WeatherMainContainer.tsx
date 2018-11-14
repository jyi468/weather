import * as actions from '../actions/actions';
import {Weather, WeatherState} from '../types/types';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { WeatherMain } from "../components/weatherMain/WeatherMain";

export interface WeatherMainContainerProps {
    time: number;
    temperature: number;
    weather: Weather;
}

export function mapStateToProps({ country, city, scale }: WeatherState,
                                { time, temperature, weather }: WeatherMainContainerProps) {
    return {
        country,
        city,
        scale,
        time,
        temperature,
        weather
    };
}

export function mapDispatchToProps(dispatch: ThunkDispatch<WeatherState, void, Action>) {
    return {
        toggleScale: () => dispatch(actions.toggleScale())
    }
}

// Connect will take mapStateToProps amd mapDispatchToProps and return another function we can use to wrap our component
export default connect(mapStateToProps, mapDispatchToProps)(WeatherMain);