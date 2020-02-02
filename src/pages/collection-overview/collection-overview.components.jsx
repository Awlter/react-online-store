import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopDataCollection } from "../../redux/shop/shop.selectors";

import { useParams } from "react-router-dom";

import CollectionPreview from "../../components/collection-preview/collection-preview";

const CollectionOverview = ({ shopCollection }) => {
  const { category } = useParams();
  const shopItem = shopCollection.find(item => item.routeName === category);

  return (
    <div>
      <CollectionPreview all {...shopItem} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopCollection: selectShopDataCollection
});

export default connect(mapStateToProps, null)(CollectionOverview);
