import React, { StrictMode } from 'react';
import './App.css';
import ResponsiveDrawer from "./ui-elements/ResponsiveDrawer";
import Canvas from "./components/Canvas";
import {withRoot} from "./withRoot";
import {Router} from "@material-ui/icons";
// import { GlobalStateProvider } from './state';
import {BrowserRouter} from "react-router-dom"
class App extends React.Component<{}> {
    render() {
        return (
            <div>
                {/*<StrictMode>*/}
                    {/*<GlobalStateProvider>*/}
                        {/*<ResponsiveDrawer/>*/}
                    {/*<Canvas/>*/}
                    {/*</GlobalStateProvider>*/}
                {/*</StrictMode>*/}
                <BrowserRouter basename="/calendar" >
                {/* … */}
                    <ResponsiveDrawer/>
                </BrowserRouter>


            </div>
        );
    }
}

export default withRoot(App);

// export default App;
