//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
import { Provider } from "mobx-react"
import mainStore from './stores/mainStore';
//Die index redert den Inhalt von APP.jsx
ReactDOM.render(
    <Provider mainStore={mainStore}>
        <App />
    </Provider>
    , document.getElementById('root'))
