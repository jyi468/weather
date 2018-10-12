import * as actions from '../actions/actions';
import {Day, WeatherState} from '../types/types';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {WeatherDay} from "../components/weatherDay/WeatherDay";
//import { Dispatch } from 'redux';

// We will use connect function that will take original App component and turn it into a container using
// mapStateToProps - changes the data from current store to to shape our component needs - mapper
// mapDispatchToProps - creates callback props to pump actions to our store using a given dispatch function

export interface DayContainer {
    index: number;
    day: Day;
}

export function mapStateToProps({ scale, dayIndex }: WeatherState, { index, day }: DayContainer) {
    return {
        index,
        dow: day.dow,
        hi: day.hi,
        lo: day.lo,
        weather: day.weather,
        scale: scale,
        isCurrentDay: index === dayIndex
    };
}

// Takes in a dispatcher function. Dispatcher functions can pass actions to our store for updates
// Create callbacks that will call the dispatcher as necessary
export function mapDispatchToProps(dispatch: ThunkDispatch<WeatherState, void, Action>, { index }: DayContainer) {
    return {
        // Change day index
        selectCurrentDay: () => dispatch(actions.changeDay(index)),
    }
}

// Connect will take mapStateToProps amd mapDispatchToProps and return another function we can use to wrap our component
export default connect(mapStateToProps, mapDispatchToProps)(WeatherDay);