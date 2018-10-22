import * as React from 'react';
import {Wind, ChartType} from '../../types/types';

export interface WeatherSelectorProps {
    precipitation: number;
    humidity: number;
    wind: Wind;
    selectChartType: (chartType: ChartType) => {};
}

export const WeatherSelector: React.SFC<WeatherSelectorProps> = (props) => {
    const { precipitation, humidity, wind, selectChartType } = props;

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Additional Information</h5>
            </div>
            <div className="card-body">
                <h5 className="card-text">
                    Precipitation: {(precipitation * 0.0393701).toFixed(2)} in.
                </h5>
                <h5 className="card-text">
                    Humidity: {humidity}%
                </h5>
                <h5 className="card-text">
                    Wind: {Math.round(wind.speed)} mph
                </h5>
                <div className="btn-group" role="group">
                    <button
                        id="temperature"
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => selectChartType(ChartType.Temperature)}>Temperature</button>
                    <button
                        id="precipitation"
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => selectChartType(ChartType.Precipitation)}>Precipitation</button>
                    <button
                        id="wind"
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => selectChartType(ChartType.Wind)}>Wind</button>
                </div>
            </div>
        </div>
    );
};