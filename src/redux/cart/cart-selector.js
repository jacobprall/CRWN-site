import { createSelector } from 'reselect';
// input and output selectors.

const selectCart = state => state.selectCart
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

