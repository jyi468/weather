import * as React from 'react';
//import * as actions from '../actions';
//import { Dispatch } from 'redux';
import './App.css';
import { WeatherState } from "../types/types";

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
function App({ city, scale, currentForecast, forecasts, fetchWeather }: WeatherState) {
    if (fetchWeather) {
        fetchWeather();
    }
    return (
        <div className="hello">
            <div className="greeting">
                {/*{city.toString() + " " + scale.toString() + " " + currentForecast.toString() +
                " " + forecasts.toString()}*/}
                Hello
            </div>
        </div>
    );
}

/*export class App extends React.Component<Props, WeatherState> {
    render() {
        const { city, scale, currentForecast, forecasts } = this.props;
        return (
            <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
        );
    }
}*/

export default App;

// helpers

/**
 *
 * @param {number} numChars - optional numbe r parameter
 * @returns {string}
 *//*
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}*/


