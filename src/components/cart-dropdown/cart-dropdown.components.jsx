import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = props => {
  const { cartHidden } = props;
  return !cartHidden ? (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  ) : null;
};

const mapStateToProps = state => {
  return {
    cartHidden: state.cart.hidden
  };
};

export default connect(mapStateToProps)(CartDropdown);
