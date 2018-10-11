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
            <div className="card-body">
                <h5 className="card-title">{city + ', ' + country}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{formatDate(time)}</h6>
                <h1 className="card-text">
                    <i className={'wi ' + getIconName(weather)}></i> {WeatherUtils.getTemperature(temperature, scale)}
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
