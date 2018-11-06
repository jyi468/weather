import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import toJson from 'enzyme-to-json';
import { store } from '../../mocks/MockWeatherState';
import {WeatherSelector} from "./WeatherSelector";
import {WeatherState} from "../../types/types";
import * as actions from "../../actions/actions";

enzyme.configure({ adapter: new Adapter() });

describe('Weather Selector', () => {
    const state: WeatherState = store.getState() as WeatherState;
    const {days, dayIndex, hourIndex, chartType} = state;
    let currentDay = days[dayIndex];
    let currentForecast = currentDay.hours[hourIndex];

    let weatherSelector = enzyme.shallow(<WeatherSelector
        precipitation={currentForecast.precipitation}
        humidity={currentForecast.humidity}
        wind={currentForecast.wind}
        selectChartType={() => store.dispatch(actions.changeChart(chartType))}
    />);

    beforeEach(() => {
        store.clearActions();
    });

    it('renders the component (snapshot)', () => {
        expect(toJson(weatherSelector)).toMatchSnapshot();
    });

});
