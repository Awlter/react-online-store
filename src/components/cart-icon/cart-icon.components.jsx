import React from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { toggleDropdown } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

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

const mapStateToProps = state => {
  return {
    totalItemCount: selectCartItemsCount(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
