import { FavoriteAction, FavoriteState, ADD_FAVORITE, DELETE_FAVORITE } from "../../types/types";

const initialState: FavoriteState = {
  inCart: []
}

export default function favorites(state = initialState, action: FavoriteAction) : FavoriteState {
  switch(action.type) {
    case ADD_FAVORITE: {
      const { favorite } = action.payload
      if(state.inCart.find((c) => c.id === favorite.id)){
        return state
      }
      return {...state, inCart: [...state.inCart, favorite]}
    }

    case DELETE_FAVORITE: {
      const { favorite } = action.payload
      const foundIndex = state.inCart.findIndex((p)=> p.id === favorite.id)
      if(foundIndex >= 0){
          state.inCart.splice(foundIndex, 1)
      }
      return {...state, inCart: [...state.inCart]}
    }

    default:
      return state
  }
}