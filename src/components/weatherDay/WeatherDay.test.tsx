import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import toJson from 'enzyme-to-json';
import {WeatherDay, WeatherDayProps} from './WeatherDay';
import { MockWeatherDayProps } from '../../mocks/MockWeatherDay';
import { store } from '../../mocks/MockWeatherState';
import * as constants from "../../constants/constants";

enzyme.configure({ adapter: new Adapter() });

describe('Weather Day', () => {
    let weatherDay = createElement(MockWeatherDayProps)

    beforeEach(() => {
        store.clearActions();
    });

    it('renders the component (snapshot)', () => {
        expect(toJson(weatherDay)).toMatchSnapshot();
    });

    it('shows border when state is current day', () => {
        expect(weatherDay.find('.border-secondary').length).toBe(0);
        let props = MockWeatherDayProps;
        props.isCurrentDay = true;
        weatherDay = createElement(props);
        expect(weatherDay.find('.border-secondary').length).toBe(1);
    });

    it('calls ChangeDay action on click', () => {
        weatherDay = createElement(MockWeatherDayProps);

        weatherDay.simulate('click');
        weatherDay.update();

        const actions = store.getActions();
        const expectedPayload = { type: constants.CHANGE_DAY, dayIndex: 5 };
        expect(actions).toEqual([expectedPayload]);
    });

});

function createElement(props: WeatherDayProps) {
    let {dow, weather, hi, lo, isCurrentDay, scale, selectCurrentDay} = props;
    return enzyme.shallow(<WeatherDay
        index={dow}
        dow={dow}
        weather={weather}
        hi={hi}
        lo={lo}
        isCurrentDay={isCurrentDay}
        scale={scale}
        selectCurrentDay={selectCurrentDay}
    />);
}