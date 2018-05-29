import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    <App />
                    <Route exact path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
            , document.getElementById('root'));
}
