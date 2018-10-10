import * as React from 'react';
import {TempScale, Weather} from '../types/types';
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

// Container component and redux
/*function App({ city, scale, currentForecast, forecasts, fetchWeather }: WeatherState) {
    if (fetchWeather) {
        fetchWeather();
    }
    return (
        <div className="hello">
            <div className="greeting">
                {/!*{city.toString() + " " + scale.toString() + " " + currentForecast.toString() +
                " " + forecasts.toString()}*!/}
                Hello
            </div>
        </div>
    );
}*/
export class App extends React.Component<WeatherState, WeatherState> {

    static defaultProps: WeatherState = {
        city: "",
        country: "",
        scale: TempScale.F,
        forecasts: [{
            time: 0,
            weather: Weather.ClearSky,
            temperature: 0,
            humidity: 0,
            precipitation: 0,
            wind: {
                deg: 0,
                speed: 0
            }
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
        const {city, country, scale, forecasts } = this.props;
        return (<div className="hello">
                <div className="greeting">
                    {city.toString() + ", " + country.toString() + " "
                    + scale.toString() + " " + JSON.stringify(forecasts[0])}
                </div>
            </div>
        );
    }
}

export default App;

// helpers

/**
 *
 * @param {number} numChars - optional numbe r parameter
 * @returns {string}
 */
/*
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}*/


