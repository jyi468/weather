import * as React from 'react';
import { TempScale, Weather } from '../../types/types';
import WeatherUtils from "../../WeatherUtils";
import './WeatherMain.css';
import {WeatherMainContainerProps} from "../../containers/WeatherMainContainer";

export interface WeatherMainProps extends WeatherMainContainerProps {
    city: string;
    country: string;
    scale: TempScale;
    toggleScale: () => void;
}

export const WeatherMain: React.SFC<WeatherMainContainerProps> = (props: WeatherMainProps) => {
    const { city, country, scale, time, temperature, weather, toggleScale } = props;

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{city + ', ' + country}</h5>
                <h6 className="card-subtitle text-muted">{formatDate(time)}</h6>
            </div>
            <div className="card-body">
                <button onClick={toggleScale}>Change Scale</button>
                <h1 className="card-text main-weather d-flex justify-content-around">
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
