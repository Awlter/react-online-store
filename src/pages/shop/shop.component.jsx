import React from "react";
import { Route, withRouter } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection.component";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={match.path}>
        <CollectionOverview />
      </Route>
      <Route exact path={`${match.path}/:collectionId`}>
        <CollectionPage />
      </Route>
    </div>
  );
};

export default withRouter(Shop);
