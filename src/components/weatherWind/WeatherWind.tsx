import * as React from 'react';
import {HOUR_LABELS} from "../../constants/constants";
import {WindContainerProps} from "../../containers/WeatherWindContainer";

export interface WindProps extends WindContainerProps{
    currentHour: number;
    changeHour: (hourIndex: number) => {}
}

export const WeatherWind: React.SFC<WindProps> = (props) => {
    const { wind, index, currentHour, changeHour } = props;

    return (
        <li className="list-inline-item">
            <div className={'card' + ((currentHour === index) ? ' border-secondary' : '')}
                 onClick={() => {changeHour(index)}}>
                <div className="card-body">
                    <h5 className="card-title">
                        {Math.round(wind.speed * 2.23694)} mph
                    </h5>
                    <i className={'mb-3 wi wi-wind towards-' + Math.round(wind.deg) + '-deg'}></i>
                    <h5 className="card-text">
                        {HOUR_LABELS[index]}
                    </h5>
                </div>
            </div>
        </li>
    );
};
