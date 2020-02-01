import React from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { toggleDropdown } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleDropDownState, totalItemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleDropDownState}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">{totalItemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDropDownState: () => dispatch(toggleDropdown())
  };
};

const mapStateToProps = createStructuredSelector({
  totalItemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
