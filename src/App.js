import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import theme from './theme';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import validate from 'validate.js';
import validators from './common/validators';


const browserHistory = createBrowserHistory();

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
