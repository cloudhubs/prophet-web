import React from "react";
import Clone from "./Clone";
import CloneSummary from "./CloneSummary";
import PrettyPrintJson from "./PrettyPrintJson";
import {Card, Typography} from "@material-ui/core";

type Props = {
    clonePair: any;
}

const ClonePair = (props: Props) => {
    return (
        <div>
            {/*{<PrettyPrintJson data={props.clonePair} />}*/}
            <Card>
                <Typography variant="h6" gutterBottom>
                    Code Clone
                </Typography>
                <CloneSummary
                    similarityController={props.clonePair.similarityController}
                    similarityService={props.clonePair.similarityService}
                    similarityRepository={props.clonePair.similarityRepository}
                    similarityRestCalls={props.clonePair.similarityRestCalls}
                    globalSimilarity={props.clonePair.globalSimilarity}
                    typeA={props.clonePair.typeA}
                    typeB={props.clonePair.typeB} />
                <Clone clone={props.clonePair.a} />
                <Clone clone={props.clonePair.b} />
            </Card>

        </div>
    );
}
export default ClonePair;