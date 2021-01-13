import React from 'react'
import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

function CartIcon({ toggleCartHidden }) {
  const cart = useSelector(state => state.cart.cartItems);
  const quantity = cart.reduce((acc, item) => acc += item.quantity, 0)
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  )
}
const mDTP = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mDTP)(CartIcon)