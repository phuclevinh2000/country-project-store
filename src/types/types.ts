export const ADD_COUNTER = 'ADD_COUNTER'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'

// Type for country to fetch api
export type Language = {
  name: string
  ios639_1: string
}

export type Country = {
  name: string
  flag: string
  languages: Language[]
  population: number
  region: string
  alpha2Code?: string
  nativeName: string
}

export type FetchCountryAction = {
  type: typeof FETCH_COUNTRIES
  payload: {
    country: Country[]
  }
}

export type CountryState = {
  allCountries: Country[]
}

// Type for increasing number
export type AddCOunterAction = {
  type: typeof ADD_COUNTER
}

export type CounterState = {
  count: number
}

export type AppState = {
  counter: CounterState
  countries: CountryState
}

// Type for components
export type SearchProps = {
  filters: string
  filterChange: any
}

export type MuiTable = {
  list: Country;
  page: number;
  rowsPerPage: number;
}