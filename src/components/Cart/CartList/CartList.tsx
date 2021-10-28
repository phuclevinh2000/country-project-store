import React from 'react'

import { removeFavorite } from '../../../redux'
import { useDispatch } from 'react-redux'

import "./cartlist.scss"
import { useSelector } from 'react-redux'
import { AppState } from '../../../types/types'

const CartList = ({countries} : any) => {
  const dispatch = useDispatch()
  const favoriteList = useSelector((state: AppState) => state.favorites.inCart);

  const handleDelete = () => {
    dispatch(removeFavorite(countries))
    localStorage.setItem("favNames", JSON.stringify(favoriteList));
  }

  return (
    <tbody>
      <tr>
        <td>{countries.name}</td>
        <td><button onClick={handleDelete}>Delete</button></td>
      </tr>
    </tbody>
  )
}

export default CartList
