import React, { Component } from "react";
import { Router, Route, Switch } from 'react-router-dom';
import {LoginPage} from '../LoginPage'
import {HomePage} from '../HomePage'
import {history} from '../../helpers/history'
import { connect } from 'react-redux';
import {PrivateRoute} from '../../helpers/PrivateRoute'
import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/home" component={HomePage} />
                        <PrivateRoute exact path="/" component={HomePage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps() {
    return {}
}
const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export {connectedApp as App}
