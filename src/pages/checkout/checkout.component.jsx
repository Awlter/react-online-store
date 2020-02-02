import React from "react";

import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotalPrice
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

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
      {Object.keys(cartItems).length ? (
        Object.entries(cartItems).map(([index, cartItem]) => (
          <CheckoutItem key={index} itemId={index} {...cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart is empty</span>
      )}
      <div className="total">Total: ${CartItemsTotalPrice}</div>

      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/40 - CVV: 123
      </div>

      <StripeCheckoutButton price={CartItemsTotalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  CartItemsTotalPrice: selectCartItemsTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
