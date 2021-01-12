import React from 'react'
import {CustomButton} from '../custom-button/custom-button.jsx'
import './cart-dropdown.scss'
export default function CartIcon() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
      
    </div>
  )
}
