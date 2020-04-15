import * as React from 'react';
import './App.css';
import {HashRouter as Router} from "react-router-dom"
import {withRoot} from "./withRoot";
import { createBrowserHistory } from 'history';
import ResponsiveDrawer from "./ui-elements/ResponsiveDrawer";
import { ThemeProvider } from '@material-ui/core/styles';
import prophetTheme from "./prophetTheme";

const App = () => {
    const history = createBrowserHistory();
    return (
        <div>
            <ThemeProvider theme={prophetTheme}>
                <Router history={history} basename={"/"} >
                    <ResponsiveDrawer/>
                </Router>
            </ThemeProvider>
        </div>
    );

}

export default withRoot(App);
