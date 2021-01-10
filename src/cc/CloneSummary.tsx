import React from "react";
import {Card} from "@material-ui/core";

type Props = {
    similarityController: any;
    similarityService: any;
    similarityRepository: any;
    similarityRestCalls: any;
    globalSimilarity: any;
    typeA: any;
    typeB: any;
}

const CloneSummary = (props: Props) => {
    return (
        <div>
            <Card>
                {props.similarityController}
                {props.similarityService}
                {props.similarityRestCalls}
                {props.globalSimilarity}
                {props.typeA}
                {props.typeB}
            </Card>

        </div>
    );
}
export default CloneSummary;