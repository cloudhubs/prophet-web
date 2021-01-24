import React from "react";
import CloneLink from "../clones/CloneLink";
import CodeAccordion from "../../utils/CodeAccordion";
import Grid from "@material-ui/core/Grid";
import AnnotationFieldTable from "./AnnotationFieldTable";
import {Paper} from "@material-ui/core";
import prophetStyles from "../../../prophetStyles";
import FieldTable from "./FieldTable";

const Entity = ({entity}) => {
    const classes = prophetStyles();

    return (
        <React.Fragment>

            {entity.hasMissingFiledAnnotations &&
                <Grid item xs={6}>
                    <Paper className={classes.entity_item}>
                        <CloneLink link={entity.path} heading={"h5"}/>
                        <FieldTable missingFields={entity.missingFields} />
                        <AnnotationFieldTable entity={entity} />
                        <CodeAccordion code={entity.code} />
                    </Paper>

                </Grid>
            }

            {!entity.hasMissingFiledAnnotations && entity.document == "Document" &&
                <Grid item xs={6}>
                    <Paper className={classes.entity_item}>
                        <CloneLink link={entity.path} heading={"h5"}/>
                        <CodeAccordion code={entity.code} />
                    </Paper>
                </Grid>
            }



        </React.Fragment>
    )
}
export default Entity;