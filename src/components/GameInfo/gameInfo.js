import React from "react";
import "./gameInfo.css";
import "aos/dist/aos.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function GameInfo() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody className="TableBody">
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell className="TableCell" component="th" scope="row">Lottery Name</TableCell>
                        <TableCell className="TableCell" align="right">Lottery 1</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell className="TableCell" component="th" scope="row">Lottery Base Price</TableCell>
                        <TableCell className="TableCell" align="right">$100</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell className="TableCell" component="th" scope="row">Lottery Ticket Price</TableCell>
                        <TableCell className="TableCell" align="right">$5</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell className="TableCell" component="th" scope="row">Pool Size</TableCell>
                        <TableCell className="TableCell" align="right">Participants/ PoolSize * 100</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell className="TableCell" component="th" scope="row">End Time</TableCell>
                        <TableCell className="TableCell" align="right"> [ in dd-mm-yy]</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default GameInfo;
