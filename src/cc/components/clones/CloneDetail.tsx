import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Box, Typography} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import CloneRow from "./CloneRow";
import CloneLink from "./CloneLink";
import CloneDetailTable from "./CloneDetailTable";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CodeSnippet from "../../utils/CodeSnippet";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            margin: theme.spacing( 5, 0),
        },
    }),
);


const CloneDetail = ({clone}) => {
    const classes = useStyles();
    return (
        <div>
            {/*<Typography variant="h6" gutterBottom className={classes.paper}>*/}
            {/*    Links*/}
            {/*</Typography>*/}
            <TableContainer component={Paper} className={classes.paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                                {"Controller"}
                            </TableCell>
                            <TableCell align="left">
                                <CloneLink link={clone.msController.msId.path} heading={"p"}/> <span>({clone.msControllerMethod.line})</span>
                            </TableCell>
                        </TableRow>
                        {clone.msService &&
                            <TableRow key={2}>
                                <TableCell component="th" scope="row">
                                    {"Service"}
                                </TableCell>
                                <TableCell align="left">
                                    {clone.msService && <CloneLink link={clone.msService.msId.path} heading={"p"}/>}
                                </TableCell>
                            </TableRow>
                        }
                        {/*<TableRow key={3}>*/}
                        {/*    <TableCell component="th" scope="row">*/}
                        {/*        {"Repository"}*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell align="left">*/}

                        {/*    </TableCell>*/}
                        {/*</TableRow>*/}
                    </TableBody>
                </Table>
            </TableContainer>

            <div>
                <CodeSnippet code={clone.msControllerMethod.code} language={'java'} showLineNumbers={false} />
            </div>

            {/*<Typography variant="h6" gutterBottom>*/}
            {/*    Properties*/}
            {/*</Typography>*/}

            {/*<CloneDetailTable msClass={clone.msController} msMethod={clone.msControllerMethod} tableName={"Controller"}/>*/}

            <TableContainer component={Paper} className={classes.paper}>
                <Table aria-label="properties table">
                    <TableBody>
                        <TableRow key={99}>
                            <TableCell component="th" scope="row">
                                <b>{"Controller"}</b>
                            </TableCell>
                            <TableCell align="left">

                            </TableCell>
                        </TableRow>
                        <TableRow key={100}>
                            <TableCell component="th" scope="row">
                                {"Return Type"}
                            </TableCell>
                            <TableCell align="left">
                                {clone.msControllerMethod.returnType}
                            </TableCell>
                        </TableRow>
                        <TableRow key={101}>
                            <TableCell component="th" scope="row">
                                {"Class Name"}
                            </TableCell>
                            <TableCell align="left">
                                {clone.msController.className}
                            </TableCell>
                        </TableRow>

                        <TableRow key={102}>
                            <TableCell component="th" scope="row">
                                {"Method Name"}
                            </TableCell>
                            <TableCell align="left">
                                {clone.msControllerMethod.methodName}
                            </TableCell>
                        </TableRow>
                        {clone.msControllerMethod.msArgumentList.map((n) => (
                            <TableRow key={102}>
                                <TableCell component="th" scope="row">
                                    {"Argument"}
                                </TableCell>
                                <TableCell align="left">
                                    {n.returnType}
                                </TableCell>
                            </TableRow>
                        ))}
                        {clone.msControllerMethod.msAnnotations.map((n) => (
                            <TableRow key={102}>
                                <TableCell component="th" scope="row">
                                    {"Annotation"}
                                </TableCell>
                                <TableCell align="left">
                                    @{n.annotationName}({n.key}={n.value})
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {clone.msServiceMethod &&
                <TableContainer component={Paper}>
                <Table aria-label="properties table">
                    <TableBody>
                        <TableRow key={99}>
                            <TableCell component="th" scope="row">
                                <b>{"Service"}</b>
                            </TableCell>
                            <TableCell align="left">

                            </TableCell>
                        </TableRow>
                        <TableRow key={100}>
                            <TableCell component="th" scope="row">
                                {"Return Type"}
                            </TableCell>
                            <TableCell align="left">
                                {clone.msServiceMethod && clone.msServiceMethod.returnType}
                            </TableCell>
                        </TableRow>
                        <TableRow key={101}>
                            <TableCell component="th" scope="row">
                                {"Class Name"}
                            </TableCell>
                            <TableCell align="left">
                                {clone.msServiceMethod && clone.msService.className}
                            </TableCell>
                        </TableRow>

                        <TableRow key={102}>
                            <TableCell component="th" scope="row">
                                {"Method Name"}
                            </TableCell>
                            <TableCell align="left">
                                {clone.msServiceMethod && clone.msServiceMethod.methodName}
                            </TableCell>
                        </TableRow>
                        {clone.msServiceMethod && clone.msServiceMethod.msArgumentList.map((n) => (
                            <TableRow key={102}>
                                <TableCell component="th" scope="row">
                                    {"Argument"}
                                </TableCell>
                                <TableCell align="left">
                                    {n.returnType}
                                </TableCell>
                            </TableRow>
                        ))}

                        {clone.msServiceMethod && clone.msServiceMethod.msAnnotations.map((n) => {
                            let isKey = n.key ? true : false;
                            return (
                                <TableRow key={102}>
                                    <TableCell component="th" scope="row">
                                        {"Annotation"}
                                    </TableCell>
                                    {isKey && (
                                        <TableCell align="left">
                                            @{n.annotationName}({n.key}={n.value})
                                        </TableCell>
                                    )}

                                    {!isKey && (
                                        <TableCell align="left">
                                            @{n.annotationName}
                                        </TableCell>
                                    )}

                                </TableRow>
                            )
                        })}


                    </TableBody>
                </Table>
            </TableContainer>
            }
        </div>
    );
}
export default CloneDetail;