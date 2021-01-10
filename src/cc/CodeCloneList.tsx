import React from "react";
import ClonePair from "./ClonePair";

type Props = {
    cloneList: any;
}

const CodeCloneList = (props: Props) => {

    return (
        <div>
            {props.cloneList !== undefined && props.cloneList.map((n) => (
                    <div>
                        <ClonePair clonePair={n}/>
                    </div>
                )
            )}
        </div>
    );
}
export default CodeCloneList;