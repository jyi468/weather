import * as actions from '../actions/actions';
import { WeatherState } from '../types/types';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {WeatherChart} from "../components/weatherChart/WeatherChart";

// Chart rerendering depends on if this function returns differently than previously
export function mapStateToProps({ scale, days, dayIndex, chartType }: WeatherState) {
    return {
        days,
        scale,
        dayIndex,
        chartType
    };
}

export function mapDispatchToProps(dispatch: ThunkDispatch<WeatherState, void, Action>) {
    return {
       changeHour: (hourIndex: number) => dispatch(actions.changeHour(hourIndex))
    }
}

// Connect will take mapStateToProps amd mapDispatchToProps and return another function we can use to wrap our component
export default connect(mapStateToProps, mapDispatchToProps)(WeatherChart);