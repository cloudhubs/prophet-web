import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Box} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import CloneRow from "./CloneRow";
const CloneDetail = ({clone}) => {
    return (
        <div>

            Links

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                                {"Controller Link"}
                            </TableCell>
                            <TableCell align="left">
                                {clone.msController.msId.path}
                            </TableCell>
                        </TableRow>
                        <TableRow key={2}>
                            <TableCell component="th" scope="row">
                                {"Controller Name"}
                            </TableCell>
                            <TableCell align="left">
                                {clone.msController.className}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            Properties

            <TableContainer component={Paper}>
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
                                {"Controller Name"}
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

                        <TableRow key={102}>
                            <TableCell component="th" scope="row">
                                {"Method Name"}
                            </TableCell>
                            <TableCell align="left">
                                {clone.msControllerMethod.methodName}
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
                        {/*<CloneRow row={103} key={"Method name"} value={clone.msController.methodName}/>*/}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default CloneDetail;