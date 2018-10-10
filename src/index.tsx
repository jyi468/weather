import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
// import App from './components/App';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, Action } from 'redux';
import { weather } from './reducers/reducers';
import { WeatherState } from './types/types';

import App from './containers/App';
import { Provider } from 'react-redux';
import {default as thunk, ThunkMiddleware} from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(
    weather,
    {},
    applyMiddleware(thunk as ThunkMiddleware<WeatherState, Action>, loggerMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
