import * as React from 'react';
import './App.css';
import {HashRouter as Router} from "react-router-dom"
import {withRoot} from "./withRoot";
import { createBrowserHistory } from 'history';
import ResponsiveDrawer from "./ui/ResponsiveDrawer";
import { ThemeProvider } from '@material-ui/core/styles';
import prophetTheme from "./prophetTheme";
import {useEffect} from "react";
import FetchMetadata from "./http/FetchMetadata";
import EffectsRegister from "./state/EffectsRegister";

const App = () => {
    const history = createBrowserHistory();

    const getMetadata = async () => {
        const repos = await FetchMetadata.getAllReposFromOrganization("cloudhubs");
        console.log(repos);
    }

    useEffect( () => {
        getMetadata();
    }, []);

    return (
        <div>
            <ThemeProvider theme={prophetTheme}>
                <Router history={history} basename={"/"} >
                    <EffectsRegister />
                    <ResponsiveDrawer/>
                </Router>
            </ThemeProvider>
        </div>
    );

}

export default withRoot(App);
