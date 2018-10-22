import * as actions from '../actions/actions';
import {WeatherState, Wind} from '../types/types';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {WeatherWind} from "../components/weatherWind/WeatherWind";

export interface WindContainerProps {
    wind: Wind;
    index: number;
}

export function mapStateToProps({hourIndex}: WeatherState, {wind, index}: WindContainerProps) {
    return {
        wind,
        currentHour: hourIndex,
        index
    };
}

export function mapDispatchToProps(dispatch: ThunkDispatch<WeatherState, void, Action>) {
    return {
        changeHour: (hourIndex: number) => dispatch(actions.changeHour(hourIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWind);