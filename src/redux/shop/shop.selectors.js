import { createSelector } from "reselect";

const selectShopData = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShopData],
  selectShopData => selectShopData.collections
);

const selectCollection = collections => {
  return shopParam => collections[shopParam];
};

export const selectShopCollection = createSelector(
  [selectShopCollections],
  shopCollections => selectCollection(shopCollections)
);
