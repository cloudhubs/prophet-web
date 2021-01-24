import * as React from 'react';
// import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom"
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
import Tms2020 from "./cc/Tms2020";

const App = () => {
    const classes = prophetStyles();
    const history = createBrowserHistory();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppHeader/>
            <ThemeProvider theme={prophetTheme}>
                <Router history={history} basename={"/"} >
                    <Switch>
                        <Route exact path="/train-ticket" component={CCApp} />
                        <Route exact path="/tms2020" component={Tms2020} />
                        <Route exact path="/" component={ProphetApp} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default withRoot(App);
