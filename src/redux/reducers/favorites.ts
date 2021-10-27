import { FavoriteAction, FavoriteState, ADD_FAVORITE, DELETE_FAVORITE } from "../../types/types";

const initialState: FavoriteState = {
  inCart: []
}

export default function favorites(state = initialState, action: FavoriteAction) : FavoriteState {
  switch(action.type) {
    case ADD_FAVORITE: {
      const { favorite } = action.payload
      return {
        ...state,
        inCart: [...state.inCart, favorite]
      }
    }

    case DELETE_FAVORITE: {
      const { favorite } = action.payload
      return {
        ...state, 
        inCart: [...state.inCart.filter(cart => cart !== favorite)]
      }
    }

    default:
      return state
  }
}