import {
  CountryState,
  FetchCountryAction,
  FETCH_COUNTRIES,
} from '../../types/types';

const initialState: CountryState = { allCountries: [] };

export default function country(
  state = initialState,
  action: FetchCountryAction
) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload.country,
      };
    default:
      return state;
  }
}
