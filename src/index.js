import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/Routes';
import * as serviceWorker from './serviceWorker';

require('dotenv').config();

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root') // Todo lo que esté dentro de este nodo va a ser manejado por React DOM
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
