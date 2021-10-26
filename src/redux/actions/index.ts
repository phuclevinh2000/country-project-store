import { ActionType } from "../action-types";

interface SearchCountriesAction {
  type: ActionType.SEARCH_COUNTRIES
}

interface SearchCountriesSuccessAction {
  type: ActionType.SEARCH_COUNTRIES_SUCCESS
  payload: string[]
}

interface SearchCountriesErrorAction {
  type: ActionType.SEARCH_COUNTRIES_ERROR
  payload: string
}

export type Action = 
  | SearchCountriesAction
  | SearchCountriesSuccessAction
  | SearchCountriesErrorAction



