import React from "react";
import "./collection-overview.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionOverview = ({ shopCollections }) => {
  return Object.entries(shopCollections).map(([_, { id, title, items }]) => (
    <div key={id} className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, indx) => indx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  ));
};

const mapStateToProps = createStructuredSelector({
  shopCollections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
