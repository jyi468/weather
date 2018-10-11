import * as React from 'react';
import {TempScale, Weather} from '../types/types';
import {WeatherMain} from './weatherMain/WeatherMain';
import {WeatherDay} from './weatherDay/WeatherDay';
//import * as actions from '../actions';
//import { Dispatch } from 'redux';
import './App.css';
import {WeatherState} from "../types/types";

/**
 * Functional component that gives name and exclamation marks depending on enthusiasm level.
 * The function takes in arguments of type Props
 *
 * @param {string} name
 * @param {number} enthusiasmLevel - optional parameter that defaults to 1
 * @returns {any}
 * @constructor
 */

export class App extends React.Component<WeatherState, WeatherState> {

    static defaultProps: WeatherState = {
        city: "",
        country: "",
        scale: TempScale.F,
        dayIndex: 0,
        hourIndex: 0,
        days: [{
            weather: Weather.ClearSky,
            dow: 0,
            hi: 276.15,
            lo: 273.15,
            hours: [{
                time: 0,
                weather: Weather.ClearSky,
                temperature: 275.15,
                humidity: 0,
                precipitation: 0,
                wind: {
                    deg: 0,
                    speed: 0
                }
            }]
        }]
    };

    constructor(props: WeatherState) {
        super(props);
    }

    componentDidMount() {
        if (this.props.fetchWeather) {
            this.props.fetchWeather();
        }
    }

    render() {
        const {city, country, scale, days, dayIndex, hourIndex} = this.props;
        let currentForecast = days[dayIndex].hours[hourIndex];

        return (
            <div className="container">
                <h1>Weather</h1>
                <div className="row mb-5">
                    <div className="col-sm-6">
                        <WeatherMain
                            country={country}
                            city={city}
                            scale={scale}
                            weather={currentForecast.weather}
                            time={currentForecast.time}
                            temperature={currentForecast.temperature}
                        />
                    </div>
                </div>
                <div className="row">

                    {
                        days.map((day, idx) => (
                                <div className="col-sm-2">
                                    <WeatherDay
                                        key={idx}
                                        dow={day.dow}
                                        hi={day.hi}
                                        lo={day.lo}
                                        scale={scale}
                                        weather={day.weather}
                                        isCurrentDay={idx === dayIndex}
                                    />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;