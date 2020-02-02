import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, all }) => {
  const filteredItems = all ? items : items.filter((_, indx) => indx < 4);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {filteredItems.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
