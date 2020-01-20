import React, { StrictMode } from 'react';
import './App.css';
import ResponsiveDrawer from "./ui-elements/ResponsiveDrawer";
import { GlobalStateProvider, useGlobalState } from './state';

interface Props {}

interface State {
    github: string;
    prophetAppUrl: string;
    prophetRequest: ProphetRequest;
};

interface ProphetRequest {
    url: string
}

class App extends React.Component<Props, State> {

    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            github: '',
            prophetAppUrl: "localhost:8080/",
            prophetRequest: {
                url: ''
            }
        };



    }







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
