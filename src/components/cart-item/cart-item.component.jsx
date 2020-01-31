import React from "react";
import "./cart-item.styles.scss";
const CartItem = ({ imageUrl, name, price, itemCount }) => {
  return (
    <div className="cart-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="name">{name}</div>
      <div className="info">
        <span>{itemCount}</span>
        <span>x</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
