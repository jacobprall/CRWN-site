import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CustomButton } from "../custom-button/custom-button.jsx";
import CartItem from "../cart-item/cart-item.jsx";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import "./cart-dropdown.scss";
function CartDropdown({ history }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(toggleCartHidden());
    history.push("/checkout")
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default withRouter(CartDropdown);
