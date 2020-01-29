import React, { StrictMode } from 'react';
import './App.css';
import ResponsiveDrawer from "./ui-elements/ResponsiveDrawer";
import Canvas from "./components/Canvas";
// import { GlobalStateProvider } from './state';

class App extends React.Component<{}> {
    render() {
        return (
            <div>
                <StrictMode>
                    {/*<GlobalStateProvider>*/}
                        <ResponsiveDrawer/>
                    {/*<Canvas/>*/}
                    {/*</GlobalStateProvider>*/}
                </StrictMode>
            </div>
        );
    }
}

export default App;
