import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionType } from "../action-types";

export const searchCountries = () => {
  return async (dispatch: Dispatch<Action>) => {  //type of dispatch
    dispatch({
      type: ActionType.SEARCH_COUNTRIES
    })
      try {
        const { data }:any = axios.get(`https://restcountries.com/v2/all`)
        
        // const json = await data.json()
        const json = data.name((result: any) =>{
          return result
        })
  
        dispatch({
          type: ActionType.SEARCH_COUNTRIES_SUCCESS,
          payload: json
        })
      } catch (err) {
        dispatch({
          type: ActionType.SEARCH_COUNTRIES_ERROR,
          payload: "error",
        })
      }
    
  }
}