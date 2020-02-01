import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  removeCartItem,
  addToCart,
  descreaseCartItems
} from "../../redux/cart/cart.actions";

const CheckoutItem = props => {
  const {
    itemId,
    imageUrl,
    name,
    price,
    itemCount,
    removeCartItem,
    increaseCartItems,
    descreaseCartItems
  } = props;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">
        <span onClick={descreaseCartItems.bind(null, itemId)}>&#10094;</span>
        <span className="number">{itemCount}</span>
        <span
          onClick={increaseCartItems.bind(null, {
            id: Number(itemId),
            imageUrl,
            name,
            price,
            itemCount
          })}
        >
          &#10095;
        </span>
      </span>
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
  removeCartItem: id => dispatch(removeCartItem(id)),
  descreaseCartItems: id => dispatch(descreaseCartItems(id)),
  increaseCartItems: item => dispatch(addToCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
