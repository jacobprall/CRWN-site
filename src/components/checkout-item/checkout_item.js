import React from "react";
import "./checkout_item.scss";
import { useDispatch } from "react-redux";
import { removeItem, decrItem, addItem } from "../../redux/cart/cart-actions";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(cartItem));
  };

  const handleDecrItem = () => {
    dispatch(decrItem(cartItem));
  };

  const handleAddItem = () => {
    dispatch(addItem(cartItem))
  }

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleRemove}>
        &#10005;
      </div>
    </div>
  );
}
