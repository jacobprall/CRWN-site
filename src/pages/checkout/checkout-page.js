import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout_item.js'
import './checkout.scss'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
export default function CheckoutPage() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((acc, ele) => acc += ele.quantity * ele.price, 0)

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <br />
      <span className="credit-card-message">
        Please use the following credit card info: <br /> 4242424242424242 -
        01/22 - 123
      </span>
      <br />
      <StripeCheckoutButton price={total} />
    </div>
  );
}
