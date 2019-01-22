import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import shapeReducer from './store/reducers/shapes';
import canvasReducer from './store/reducers/canvas';
import colorsReducer from './store/reducers/colors';


// Combine reducers
const rootReducer = combineReducers({
    shapes: shapeReducer,
    canvas: canvasReducer,
    colors: colorsReducer
});

// Create store
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Create app with Provider with stores
const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
