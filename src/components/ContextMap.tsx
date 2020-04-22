import React from "react";
import {Mermaid} from "./Mermaid"
import {useGlobalState} from '../state/appState';

const ContextMap = () => {
    const [value, update] = useGlobalState('communicationGraph');
    return (
        <div>
            Hello from mermaid

            <Mermaid
                chart={
                    value}
            />
        </div>
    );
}

export default ContextMap;
