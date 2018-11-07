import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import toJson from 'enzyme-to-json';
import { store } from '../../mocks/MockWeatherState';
import {WeatherWind} from "./WeatherWind";
import {Forecast, WeatherState} from "../../types/types";
import * as actions from "../../actions/actions";

enzyme.configure({ adapter: new Adapter() });

describe('Weather Wind', () => {
    const state: WeatherState = store.getState() as WeatherState;
    const { days, dayIndex} = state;

    let winds = days[dayIndex].hours.map((forecast: Forecast) => (forecast.wind));

    let weatherWind = enzyme.shallow(<WeatherWind
        wind={winds[0]}
        currentHour={0}
        hourOffset={0}
        index={0}
        changeHour={() => store.dispatch(actions.changeHour(0))}
    />);

    beforeEach(() => {
        store.clearActions();
    });


    it('renders the component (snapshot)', () => {
        expect(toJson(weatherWind)).toMatchSnapshot();
    });

    it('renders correct speed', () => {
        const element = weatherWind.find('.card-title');
        expect(element.text()).toBe('3 mph');
    });

    it('renders correct icon', () => {
        const element = weatherWind.find('.wi-wind.towards-230-deg');
        expect(element.length).toBe(1);
    });

    it('renders correct time', () => {
        const element = weatherWind.find('.card-text');
        expect(element.text()).toBe('2 AM');
    });
});
