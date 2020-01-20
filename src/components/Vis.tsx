import React from "react";
import {useGlobalState} from '../state';
import Graph from "react-graph-vis";

type Props = {
    graph: any;
    options: any;
    events: any;
}

class InnerVis extends React.Component<Props> {
    render() {
        return <div>
            ...
        </div>;
    }
}

const Vis = () => {
    const graph = useGlobalState('graph');
    const options = useGlobalState('options');
    const events = useGlobalState('events');

    return (
        <div>
            <InnerVis graph={graph} options={options} events={events}/>
        </div>
    );
}

export default Vis;