import * as React from 'react';
import './App.css';
import {HashRouter as Router} from "react-router-dom"
import {withRoot} from "./withRoot";
import { createBrowserHistory } from 'history';
import ResponsiveDrawer from "./ui-elements/ResponsiveDrawer";
const App = () => {
    const history = createBrowserHistory();
    return (
        <div>
            <Router history={history} basename={"/"} >
                <ResponsiveDrawer/>
            </Router>
        </div>
    );

}

export default withRoot(App);
