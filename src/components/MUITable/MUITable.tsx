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
// redux store 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { AppState, Favorite } from '../../types/types'
import addFavorite from '../../redux/actions/favorites';
import { removeFavorite } from '../../redux';
// link
import { Link } from 'react-router-dom'
// import MoreDetail from '../MoreDetail/MoreDetail';

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
  const dispatch = useDispatch()
  const favoriteList = useSelector((state: AppState) => state.favorites.inCart)
  // const [ added, setAdded] = useState(false)
  // console.log(favoriteList)

  
  // need to find algorithm for if found same name, then delete both in store.
  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setAdded(!added)
    let favorite: Favorite = {
      id: (+new Date()).toString(),
      name: e.currentTarget.getAttribute('value'),
      flags: "flag"
    }
    dispatch(addFavorite(favorite))
    if(favoriteList.find((c)=> c.name === favorite.name)){
        dispatch(removeFavorite(favorite))
    } 
  }


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
            <StyledTableCell align="left">Add to store</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
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
                    <img src={row.flag} alt="#" /> 
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
                <StyledTableCell align="left">
                  <button value={row.name} onClick={handleFavorite}>Add</button>
                </StyledTableCell>
                <StyledTableCell>
                  <Link to={`/moredetail/${row.name}`}>
                    More Detail
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
