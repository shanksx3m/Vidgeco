import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
import { Provider } from "mobx-react"
import mainStore from './stores/mainStore';

ReactDOM.render(
    <Provider mainStore={mainStore}>
        <App />
    </Provider>
    , document.getElementById('root'))
