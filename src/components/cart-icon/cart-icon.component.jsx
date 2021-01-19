import React from "react";
import { CartIconContainer } from "./cart-icon.styles";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

function CartIcon({ toggleCartHidden }) {
  const cart = useSelector((state) => state.cart.cartItems);
  const quantity = cart.reduce((acc, item) => (acc += item.quantity), 0);
  return (
    <CartIconContainer className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon style={{ width: "24px", height: "24px" }} />
      <span className="item-count">{quantity}</span>
    </CartIconContainer>
  );
}
const mDTP = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mDTP)(CartIcon);
