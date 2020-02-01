import React from "react";
import "./cart-dropdown.styles.scss";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartHidden
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartHidden, cartItems, history }) => {
  return !cartHidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {Object.keys(cartItems).length ? (
          Object.entries(cartItems).map(([index, cartItem]) => (
            <CartItem key={index} {...cartItem}></CartItem>
          ))
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  cartHidden: selectCartHidden,
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
