import { createSelector } from "reselect";

const selectShopData = state => state.shop;

export const selectShopDataCollection = createSelector(
  [selectShopData],
  shopCollection => shopCollection.collection
);
