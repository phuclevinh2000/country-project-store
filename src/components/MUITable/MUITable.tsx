import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import numeral from 'numeral';
import { Hidden } from '@material-ui/core';
import './muitable.scss';
// import {Country} from "../../types/types"

// type MuiTable = {
//   list?: Country;
//   page?: number;
//   rowsPerPage?: number;
// }

const StyledTableCell = styled(TableCell)(({ theme }: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#464444',
    color: theme.palette.common.white,
    fontsize: 18,
    overflow: Hidden,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }: any) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({ list, page, rowsPerPage }: any) {
  console.log(list);
  return (
    <TableContainer component={Paper} style={{ borderRadius: '0' }}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Flag</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Population</StyledTableCell>
            <StyledTableCell align="left">Lang</StyledTableCell>
            <StyledTableCell align="left">Region</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            list
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row: any) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {/* {row.flag} */}
                  {<img src={row.flag} alt="#" />}
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">
                  {numeral(row.population).format('0,0')}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {
                    <ul>
                      {row.languages.map((note: any) => (
                        <li key={note.name}>{note.name}</li>
                      ))}
                    </ul>
                  }
                </StyledTableCell>
                <StyledTableCell align="left">{row.region}</StyledTableCell>
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
