import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = props => {
  const { cartHidden, cartItems } = props;
  return !cartHidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {Object.entries(cartItems).map(([index, cartItem]) => (
          <CartItem key={index} {...cartItem}></CartItem>
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  ) : null;
};

const mapStateToProps = ({ cart: { hidden, cartItems } }) => {
  return {
    cartHidden: hidden,
    cartItems
  };
};

export default connect(mapStateToProps)(CartDropdown);
