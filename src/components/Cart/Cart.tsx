import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../types/types'
import CartList from './CartList/CartList';

const Cart = () => {
  const favoriteList = useSelector((state: AppState) => state.favorites.inCart)


  return (
    <div>
      <h1>Cart</h1>
      {
        favoriteList.map((cart) =>(
          <CartList key={cart.id} countries={cart} />
        ))
      }
    </div>
  )
}

export default Cart
