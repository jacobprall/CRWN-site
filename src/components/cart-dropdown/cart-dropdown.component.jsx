import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CustomButton } from "../custom-button/custom-button.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessageSpan,
} from "./cart-dropdown.styles";
function CartDropdown({ history }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleCartHidden());
    history.push("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageSpan>Your Cart Is Empty</EmptyMessageSpan>
        )}
      </CartItems>
      <CustomButton style={{ marginTop: "auto" }} onClick={handleClick}>
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
}

export default withRouter(CartDropdown);
