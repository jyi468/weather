import * as React from 'react';
import {Wind} from '../../types/types';

export interface WeatherSelectorProps {
    precipitation: number;
    humidity: number;
    wind: Wind;
}

export const WeatherSelector: React.SFC<WeatherSelectorProps> = (props) => {
    const { precipitation, humidity, wind } = props;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-text">
                    Precipitation: {Math.round(precipitation)}%
                </h5>
                <h5 className="card-text">
                    Humidity: {humidity}%
                </h5>
                <h5 className="card-text">
                    Wind: {wind.speed} mph
                </h5>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-secondary">Precipitation</button>
                    <button type="button" className="btn btn-outline-secondary">Humidity</button>
                    <button type="button" className="btn btn-outline-secondary">Wind</button>
                </div>
            </div>
        </div>
    );
};