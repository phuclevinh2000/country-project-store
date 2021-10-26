import { ActionType } from "../action-types";
import { Action } from "../actions"

interface CountriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (
  state: CountriesState = initialState,
  action: Action
): CountriesState => {
  switch (action.type) {
    case ActionType.SEARCH_COUNTRIES:
      return {loading: true, error: null, data:[]}
    case ActionType.SEARCH_COUNTRIES_SUCCESS:
      return {loading: false, error: null, data: action.payload}
    case ActionType.SEARCH_COUNTRIES_ERROR:
      return {loading: false, error: action.payload, data: []}
    default:
      return state;
  }
}

export default reducer