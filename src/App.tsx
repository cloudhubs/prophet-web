import React, { StrictMode } from 'react';
import './App.css';
import ResponsiveDrawer from "./ui-elements/ResponsiveDrawer";
import { GlobalStateProvider } from './state';

class App extends React.Component<{}> {
    render() {
        return (
            <div>
                <StrictMode>
                    <GlobalStateProvider>
                        <ResponsiveDrawer/>
                    </GlobalStateProvider>
                </StrictMode>
            </div>
        );
    }
}

export default App;
