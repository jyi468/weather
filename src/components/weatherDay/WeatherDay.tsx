import * as React from 'react';
import {TempScale, Weather} from "../../types/types";
import WeatherUtils from "../../WeatherUtils";

export interface WeatherDayProps {
    dow: number;
    weather: Weather;
    scale: TempScale;
    hi: number;
    lo: number;
    isCurrentDay: boolean;
}

export const WeatherDay: React.SFC<WeatherDayProps> = (props) => {
    let {dow, weather, hi, lo, isCurrentDay, scale} = props;
    return (
        <div className={"card text-center" + (isCurrentDay ? " border-primary" : "")}>
            <div className="card-header">
                {WeatherUtils.getDayOfWeek(dow)}
            </div>
            <div className="card-body">
                <h1 className="card-text">
                    <i className={'wi ' + weather}></i>
                </h1>
                <h6><strong>{WeatherUtils.getTemperature(hi, scale)}</strong> {WeatherUtils.getTemperature(lo, scale)}</h6>
            </div>
        </div>
    );
};