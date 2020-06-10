import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import history from './history'

ReactDOM.render(
<Router history={history}>
<Routes history={history} />
</Router>
,
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

