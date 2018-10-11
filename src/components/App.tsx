import * as React from 'react';
import {TempScale, Weather} from '../types/types';
import {WeatherMain} from './weatherMain/WeatherMain';
import {WeatherDay} from './weatherDay/WeatherDay';
import './App.css';
import {WeatherState} from "../types/types";
import {WeatherChart} from "./weatherChart/WeatherChart";

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
        let currentDay = days[dayIndex];
        let currentForecast = currentDay.hours[hourIndex];
        /*let x = 0;
        let temps = currentDay.hours.map((forecast: any) => {
            let pair =  [x, forecast.temperature];
            x += 128;
            return pair;
        });*/

        let temps = currentDay.hours.map((forecast: any) => {
            return forecast.temperature;
        });
        // Transform hours to points for graph.
        return (
            <div className="container">
                <div className="row mt-3 mb-3">
                    <div className="col-sm-4 offset-sm-1">
                        <h1>Weather</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-5 offset-sm-1">
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
                    <div className="col-sm-10 offset-sm-1 mb-3">
                        <WeatherChart points={temps}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1"/>
                    {days.map((day, idx) => (
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
                    ))}
                </div>
            </div>
        );
    }
}

export default App;