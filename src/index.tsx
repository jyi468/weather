import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
// import Hello from './components/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { EnthusiasmAction } from "./actions";

import Hello from './containers/Hello';
import { Provider } from 'react-redux';

const store = createStore<StoreState, EnthusiasmAction, null, null>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

/*ReactDOM.render(
  //<App />,
    <Hello name="TypeScript" enthusiasmLevel={10}/>,
  document.getElementById('root') as HTMLElement
);*/
registerServiceWorker();
