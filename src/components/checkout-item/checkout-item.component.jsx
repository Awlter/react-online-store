import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = props => {
  const { imageUrl, name, price, itemCount } = props;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">{itemCount}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
