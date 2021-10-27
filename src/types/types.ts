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

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const ADD_FAVORITE = 'ADD_COUNTRY'
export const DELETE_FAVORITE = 'DELETE_COUNTRY'

export type AddFavoriteAction = {
  type: typeof ADD_FAVORITE,
  payload: {
    favorite: Favorite
  }
}

export type DeleteFavoriteAction = {
  type: typeof DELETE_FAVORITE,
  payload: {
    favorite: Favorite
  }
}

export type Favorite = {
  id: string,
  name: string | null,
  flags: string
}

export type FavoriteProps = {
  FavoriteObj: Favorite
}

export type FavoriteState = {
  inCart: Favorite[]
}

export type FavoriteAction = AddFavoriteAction | DeleteFavoriteAction


// fetch
export type FetchCountryAction = {
  type: typeof FETCH_COUNTRIES
  payload: {
    country: Country[]
  }
}

export type CountryState = {
  allCountries: Country[]
}


export type AppState = {
  countries: CountryState
  favorites: FavoriteState
}


// Type for components
export type SearchProps = {
  filters: string
  filterChange: any
}

