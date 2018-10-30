import {WeatherDayProps} from "../components/weatherDay/WeatherDay";
import {TempScale, Weather} from "../types/types";
import {store} from "./MockWeatherState";
import * as actions from "../actions/actions";

export const MockWeatherDayProps: WeatherDayProps = {
    "index": 0,
    "dow": 5, 
    "hi": 281.41, 
    "lo": 274.647, 
    "weather": Weather.ClearSky,
    "scale": TempScale.F,
    "isCurrentDay": false,
    "selectCurrentDay": () => store.dispatch(actions.changeDay(5))
};