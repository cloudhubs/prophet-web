import React from "react";
import PrettyPrintJson from "./PrettyPrintJson";
import {Metadata} from "./model/Metadata";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

type Props = {
    metadata: Metadata;
}

const AllSummary = (props: Props) => {

    return (
        <React.Fragment>
            {/*{<PrettyPrintJson data={props.metadata} />}*/}
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Construct</TableCell>
                            <TableCell align="left">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                                {"Class Count"}
                            </TableCell>
                            <TableCell align="left">{props.metadata.classCount}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}
export default AllSummary;