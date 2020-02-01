import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import { removeCartItem } from "../../redux/cart/cart.actions";

const CheckoutItem = props => {
  const { itemId, imageUrl, name, price, itemCount, removeCartItem } = props;
  console.log(props);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">{itemCount}</span>
      <span
        className="remove-button"
        onClick={removeCartItem.bind(null, itemId)}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeCartItem: id => dispatch(removeCartItem(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
