import React from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class Shop extends React.Component {
  states = {
    collection: SHOP_DATA
  };

  render() {
    const { collection } = this.states;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
export default Shop;
