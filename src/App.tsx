import * as React from 'react';
// import './App.css';
import {HashRouter as Router, Route} from "react-router-dom"
import {withRoot} from "./withRoot";
import { createBrowserHistory } from 'history';
// theme
import { ThemeProvider } from '@material-ui/core/styles';
import prophetTheme from "./prophetTheme";
import prophetStyles from "./prophetStyles";
// material ui
import CssBaseline from '@material-ui/core/CssBaseline';
// components
import EffectsRegister from "./state/EffectsRegister";
import MainCanvas from "./components/main/MainCanvas";
import AppFooter from "./components/main/AppFooter";
import AppHeader from "./components/main/AppHeader";
import LoadingIndicator from "./shared/LoadingIndicator";
import CCApp from './cc/CCApp';
import ProphetApp from "./ProphetApp";

const App = () => {
    const history = createBrowserHistory();
    const classes = prophetStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <ThemeProvider theme={prophetTheme}>
                <Router history={history} basename={"/"} >
                    <Route exact path="/hello" component={CCApp} />
                    <Route exact path="/" component={ProphetApp} />
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default withRoot(App);
