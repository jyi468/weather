import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import toJson from 'enzyme-to-json';
import { store } from '../../mocks/MockWeatherState';
import {WeatherMain} from "./WeatherMain";
import {WeatherState} from "../../types/types";

enzyme.configure({ adapter: new Adapter() });

describe('Weather Main', () => {
    const state: WeatherState = store.getState() as WeatherState;
    const {city, country, scale, days, dayIndex, hourIndex} = state;
    let currentDay = days[dayIndex];
    let currentForecast = currentDay.hours[hourIndex];

    let weatherDay = enzyme.shallow(<WeatherMain
        country={country}
        city={city}
        scale={scale}
        weather={currentForecast.weather}
        time={currentForecast.time}
        temperature={currentForecast.temperature}
    />);

    beforeEach(() => {
        store.clearActions();
    });

    it('renders the component (snapshot)', () => {
        expect(toJson(weatherDay)).toMatchSnapshot();
    });

    it('renders the correct date', () => {
        expect(true).toBe(true);
    });

    it('renders the correct weather', () => {
        expect(true).toBe(true);
    });

    it('renders the correct temperature', () => {
        expect(true).toBe(true);
    });

    it('renders the correct location', () => {
        expect(true).toBe(true);
    });

});
