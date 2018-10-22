import * as React from 'react';
import { TempScale, Weather } from '../../types/types';
import WeatherUtils from "../../WeatherUtils";

export interface WeatherMainProps {
    city: string;
    country: string;
    scale: TempScale
    time: number;
    temperature: number;
    weather: Weather;
}

export const WeatherMain: React.SFC<WeatherMainProps> = (props) => {
    const { city, country, scale, time, temperature, weather } = props;

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{city + ', ' + country}</h5>
                <h6 className="card-subtitle text-muted">{formatDate(time)}</h6>
            </div>
            <div className="card-body">
                <h1 className="card-text main-weather">
                    <i className={'wi ' + getIconName(weather)}></i> {WeatherUtils.getTemperature(temperature, scale, true)}
                </h1>
            </div>
        </div>
    );
};

function formatDate(dt: number): string {
    // Must multiply by 1000 for millisecond value
    return new Date(dt * 1000).toDateString();
}


function getIconName(weather: Weather): string {
    return weather;
}
