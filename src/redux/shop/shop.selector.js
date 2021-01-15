import { createSelector } from "reselect";

const selectShop = (state) => state;

export const selectCollections = createSelector(
  [selectShop],
  (state) => state.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
