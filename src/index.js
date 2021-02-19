import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import configureStore from './redux/configureStore.js';
import {Provider} from 'react-redux'
const store = configureStore();

render (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
)