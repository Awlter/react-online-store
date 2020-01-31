import React from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { toggleDropdown } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
const CartIcon = props => {
  const { toggleDropDownState } = props;
  return (
    <div className="cart-icon" onClick={toggleDropDownState}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDropDownState: () => dispatch(toggleDropdown())
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
