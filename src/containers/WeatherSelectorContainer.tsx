import * as actions from '../actions/actions';
import {ChartType, WeatherState, Wind} from '../types/types';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {WeatherSelector} from "../components/weatherSelector/WeatherSelector";

export interface SelectorContainer {
    chartType: ChartType;
    precipitation: number;
    humidity: number;
    wind: Wind;
}

export function mapStateToProps({ chartType }: WeatherState, { precipitation, humidity, wind }: SelectorContainer) {
    return {
        chartType,
        precipitation,
        humidity,
        wind
    };
}

export function mapDispatchToProps(dispatch: ThunkDispatch<WeatherState, void, Action>) {
    return {
        // Change chart type
        selectChartType: (chartType: ChartType) => dispatch(actions.changeChart(chartType))
    }
}

// Connect will take mapStateToProps amd mapDispatchToProps and return another function we can use to wrap our component
export default connect(mapStateToProps, mapDispatchToProps)(WeatherSelector);