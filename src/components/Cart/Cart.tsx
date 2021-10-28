import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../types/types'

import CartList from './CartList/CartList';
import "./cart.scss"

const Cart = () => {
  const favoriteList = useSelector((state: AppState) => state.favorites.inCart)

  return (
    <div className="header">
      <h1>My Favorite List</h1>
      <table className="header__table">
        <thead className="headTable">
          <tr>
            <th>Country Description</th>
            <th>Remove from favorite</th>
          </tr>
        </thead>
          {
            favoriteList.map((cart: { id: any; }) => (
              <CartList key={cart.id} countries={cart} />
            ))
          }   
      </table>
    </div>
  )
}

export default Cart
