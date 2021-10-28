import {
  Country,
  FetchCountryAction,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SAGA,
} from '../../types/types';
import { Dispatch } from 'redux';

export default function fetchCountries(country: Country[]): FetchCountryAction {
  return {
    type: FETCH_COUNTRIES,
    payload: {
      country,
    },
  };
}

// export function fetchWithSaga() {
//   return{
//     type: FETCH_COUNTRIES_SAGA
//   }
// }

export function fetchData(){
  return(dispatch: Dispatch) => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((countries) => {
        // console.log(countries)
        dispatch(fetchCountries(countries))
      })
  }
}

// export function fetchDataWithAwait(){
//   return async(dispatch: Dispatch) => {
//     const response = await fetch('https://restcountries.com/v2/all:')
//     const countries = await response.json()
//         dispatch(fetchCountries(countries))
      
//   }
// }
