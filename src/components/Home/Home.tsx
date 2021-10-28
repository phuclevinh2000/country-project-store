import React, { useState, useCallback } from 'react';
import Search from '../Search/Search';
import MUITable from '../MUITable/MUITable';
import useDebounce from '../../hooks/useDebound';
// import { useSelector } from 'react-redux';
import { Country, AppState } from '../../types/types';
import { useSelector } from 'react-redux';
import useCountry from '../../hooks/useCountries';
import TablePagination from '@mui/material/TablePagination';


const Home: React.FC = () => {
  useCountry();
  const [filters, setFilters] = useState<string>('');
  const debounceValue = useDebounce(filters, 500);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5); //set initial the rows per page to 5
  const response = useSelector(
    (state: AppState) => state.countries.allCountries
  );

  // take the value of the input
  const filterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters(event.target.value);
    },
    []
  );

  // Function to handle next page click
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // make a filter output, if find coutry name then use it, else just take the whole data
  let list = debounceValue
    ? response.filter?.((country: Country) =>
        country.name.toLowerCase().includes(filters.toLowerCase())
      )
    : response;

  if (!list) {
    return <div>Loading...</div>;
  } else
    return (
      <div>
        <Search filters={filters} filterChange={filterChange} />
        <MUITable 
          list={list} 
          page={page} 
          rowsPerPage={rowsPerPage} 
        />
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 250]}
          component="div"
          count={list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    );
};

export default Home;
