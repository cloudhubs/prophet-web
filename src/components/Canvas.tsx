import React from "react";
import {Mermaid} from "./Mermaid"
import {useGlobalState} from '../state';
import ConfigurationForm from "./ConfigurationForm";

const Canvas = () => {
    const [prophetAppData, update] = useGlobalState('prophetAppData');
    const [selectedMs] = useGlobalState('ms');
    const [contextMap] = useGlobalState('contextMap');
    const [communication] = useGlobalState('communication');
    return (
        <div>
            <ConfigurationForm/>

            {/*<Mermaid*/}
            {/*    chart={*/}
            {/*        prophetAppData.global.contextMap} />*/}

            {/*<Mermaid*/}
            {/*    chart={*/}
            {/*        prophetAppData.global.communication} />*/}

            {contextMap &&
            <Mermaid
                chart={
                    prophetAppData.global.contextMap} />
            }

            {communication &&

            <Mermaid
                chart={
                    prophetAppData.global.communication} />
            }

            {prophetAppData.ms.map((ms, index) => {
                if (ms.name == selectedMs) {
                    return <Mermaid
                        chart={
                            ms.boundedContext} />
                    }
                })
            }
        </div>
    );
}

export default Canvas;
