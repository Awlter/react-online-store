import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { selectShopDataCollection } from "../../redux/shop/shop.selectors";

const Shop = ({ shopCollection }) => (
  <div className="shop-page">
    {shopCollection.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} collectionId={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopCollection: selectShopDataCollection
});

export default connect(mapStateToProps)(Shop);
