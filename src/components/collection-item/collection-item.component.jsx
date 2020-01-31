import React from "react";

import { connect } from "react-redux";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addToCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addToCart }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton
        inverted
        onClick={addToCart.bind(null, {
          ...item
        })}
      >
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: props => dispatch(addToCart(props))
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
