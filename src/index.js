import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import {populateEffectTypesReducer} from './reducers';

ReactDOM.render(
    <Provider  store={createStore(populateEffectTypesReducer)}>
        <App />
    </Provider>, document.getElementById('root')
)