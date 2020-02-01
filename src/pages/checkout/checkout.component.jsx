import React from "react";

import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotalPrice
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, CartItemsTotalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {["product", "description", "quantity", "price", "remove"].map(
          header => (
            <div key={header} className="header-block">
              <span>{header}</span>
            </div>
          )
        )}
      </div>
      <div className="total">Total: ${CartItemsTotalPrice}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  CartItemsTotalPrice: selectCartItemsTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
