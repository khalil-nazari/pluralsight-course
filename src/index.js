import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

render (
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
)