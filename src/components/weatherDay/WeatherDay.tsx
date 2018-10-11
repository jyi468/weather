import * as React from 'react';
import {Weather} from "../../types/types";
import WeatherUtils from "../../WeatherUtils";

export interface WeatherDayProps {
    dow: number;
    weather: Weather;
    hi: number;
    lo: number;
    isCurrentDay: boolean;
}

export const WeatherDay: React.SFC<WeatherDayProps> = (props) => {
    let {dow, weather, hi, lo, isCurrentDay} = props;
    return (
        <div className={"card" + isCurrentDay ? " border-primary" : ""}>
            <div className="card-header">
                {WeatherUtils.getDayOfWeek(dow)}
            </div>
            <div className="card-body">
                <h1 className="card-text">
                    <i className={'wi ' + weather}></i>
                </h1>
                <h6>{hi}</h6> <h6 className="font-weight-light">{lo}</h6>
            </div>
        </div>
    );
};