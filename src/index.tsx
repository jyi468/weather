import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
// import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, Action } from 'redux';
import { enthusiasm } from './reducers/index';
import { WeatherState } from './types/index';
//import { WeatherAction } from "./actions";

import App from './containers/App';
import { Provider } from 'react-redux';
import {default as thunk, ThunkMiddleware} from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

/*const store = createStore<StoreState, EnthusiasmAction, null, null>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});*/
const store = createStore(
    enthusiasm,
    {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
    },
    applyMiddleware(thunk as ThunkMiddleware<WeatherState, Action>, loggerMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
