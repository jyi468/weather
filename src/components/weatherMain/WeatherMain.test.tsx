import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import toJson from 'enzyme-to-json';
import { store } from '../../mocks/MockWeatherState';
import {WeatherMain} from "./WeatherMain";
import {WeatherState} from "../../types/types";
import * as actions from "../../actions/actions";

enzyme.configure({ adapter: new Adapter() });

describe('Weather Main', () => {
    const state: WeatherState = store.getState() as WeatherState;
    const {city, country, scale, days, dayIndex, hourIndex} = state;
    let currentDay = days[dayIndex];
    let currentForecast = currentDay.hours[hourIndex];

    let weatherMain = enzyme.shallow(<WeatherMain
        country={country}
        city={city}
        scale={scale}
        weather={currentForecast.weather}
        time={currentForecast.time}
        temperature={currentForecast.temperature}
        toggleScale={() => store.dispatch(actions.toggleScale())}
    />);

    beforeEach(() => {
        store.clearActions();
    });

    it('renders the component (snapshot)', () => {
        expect(toJson(weatherMain)).toMatchSnapshot();
    });

    it('renders the correct location', () => {
        let element = weatherMain.find('.card-header .card-title');
        expect(element.text()).toBe('Quinebaug, US');
    });

    it('renders the correct date', () => {
        let element = weatherMain.find('.card-header .card-subtitle');
        expect(element.text()).toBe('Mon Oct 29 2018');
    });

    it('renders the correct weather', () => {
        let element = weatherMain.find('.wi-day-showers');
        expect(element.length).toBe(1);
    });

    it('renders the correct temperature', () => {
        let element = weatherMain.find('.card-body .card-text');
        expect(element.text()).toBe(' 53 F°');
    });

});
