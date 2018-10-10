import App from '../components/App';
import * as actions from '../actions/actions';
import { WeatherState } from '../types/types';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
//import { Dispatch } from 'redux';

// We will use connect function that will take original App component and turn it into a container using
// mapStateToProps - changes the data from current store to to shape our component needs - mapper
// mapDispatchToProps - creates callback props to pump actions to our store using a given dispatch function

export function mapStateToProps({ city, scale, forecasts, currentForecast }: WeatherState) {
    return {
        city, scale, forecasts, currentForecast
    }
}

// Takes in a dispatcher function. Dispatcher functions can pass actions to our store for updates
// Create callbacks that will call the dispatcher as necessary
export function mapDispatchToProps(dispatch: ThunkDispatch<WeatherState, void, Action>) {
    return {
        // Add function for fetch using dispatch
        fetchWeather: () => dispatch(actions.fetchWeather()),
        //fetchWeatherMock: () => dispatch(actions.fetchWeatherMock())
    }
}

// Connect will take mapStateToProps amd mapDispatchToProps and return another function we can use to wrap our component
export default connect(mapStateToProps, mapDispatchToProps)(App);