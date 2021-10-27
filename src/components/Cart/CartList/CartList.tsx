import React from 'react'
import { removeFavorite } from '../../../redux'
import { useDispatch } from 'react-redux'

const CartList = ({countries} : any) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeFavorite(countries))
  }

  return (
    <div>
      {countries.name}
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default CartList
