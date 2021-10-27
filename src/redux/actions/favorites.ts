import { AddFavoriteAction, ADD_FAVORITE, DELETE_FAVORITE, Favorite, DeleteFavoriteAction } from "../../types/types";

export default function addFavorite(favorite: Favorite): AddFavoriteAction {
  return {
    type: ADD_FAVORITE,
    payload: {
      favorite,
    }
  }
}

export function removeFavorite(favorite: Favorite): DeleteFavoriteAction {
  return {
    type: DELETE_FAVORITE,
    payload: {
      favorite,
    }
  }
}