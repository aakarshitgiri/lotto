import React from "react";
import "./gameRecord.css";
import "aos/dist/aos.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function GameRecord() {
    return (

        <div>
            <h1 className="gameRecord__Heading">Past Records</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="TableHead" align="center">Lottery Name</TableCell>
                            <TableCell className="TableHead" align="center">Lottery Base Price</TableCell>
                            <TableCell className="TableHead" align="center">Winning Price</TableCell>
                            <TableCell className="TableHead" align="center">End Time</TableCell>
                            <TableCell className="TableHead" align="center">Winner Lottery Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="TableBody">
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell className="TableCell" align="center" component="th" scope="row">Lottery Name</TableCell>
                            <TableCell className="TableCell" align="center">$100</TableCell>
                            <TableCell className="TableCell" align="center">$500</TableCell>
                            <TableCell className="TableCell" align="center">11/10/2000</TableCell>
                            <TableCell className="TableCell" align="center">12345</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default GameRecord;
