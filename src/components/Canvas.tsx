import React from "react";
import {Mermaid} from "./Mermaid"
import {useGlobalState} from '../state';

const Canvas = () => {
    const [prophetAppData, update] = useGlobalState('prophetAppData');
    return (
        <div>
            {}
            Hello from mermaid
            <Mermaid
                chart={
                    value}
            />
        </div>
    );
}

export default Canvas;